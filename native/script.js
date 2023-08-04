class DomManipulator {
    getElement(className) {
        return document.querySelector(className);
    }

    createElement(tagName, className, enterTarget, innerText, type) {
        const element = document.createElement(tagName);

        if(Array.isArray(className)) {
            className.forEach((className) => element.classList.add(className));
        } else {
            element.classList.add(className);
        }

        if(type) {
            this.setAttr(element, type.attrName, type.value);
        }

        if (innerText) {
            element.innerHTML = innerText;
        }
        
        return enterTarget.appendChild(element);
    }

    deleteElement(className) {
        const element = document.querySelector(`.${className}`);

        if(element) {
            element.remove()
        } else {
            console.error("Element is not found!");
        }
    }

    deleteChildNodes(domElement) {
        domElement.innerHTML = "";
    }

    setText(domElement, text) {
        domElement.textContent = text;
    }

    addClass(domElement, className) {
        domElement.classList.add(className);
    }

    setAttr(dom, attrName, value) {
        dom.setAttribute(attrName, value);
    }
}

class TodoItem {
}

class TodoApp {
    constructor(name, todos) {
        this._name = name;
        this._todos = todos;
        this.mainBlock = dom.createElement("div", "todo", root);
        this.header = dom.createElement("div", "todo-header", this.mainBlock);
        this.body = dom.createElement("div", "todo-body", this.mainBlock);
        this.footer = dom.createElement("div", "todo-footer", this.mainBlock);
    }

    init() {
        dom.setText(this.header, this._name);
        this.fillFooter();
        this.loadTodos();
    }

    loadTodos() {
        this._todos.forEach((todo, index) => {
            this.createTodo(todo, index);
        });
    }

    createTodo(todo, index) {
        const todoItem = dom.createElement("div", "todo-item", this.body);
        const todoText = dom.createElement("div", "todo-item__text", todoItem);
        const todoCompleteBtn = dom.createElement("button", ["todo-item__btn", "todo-item__btn_complete"], todoItem, "&#10003;", {attrName: "type", value: "button"});
        const todoDeleteBtn = dom.createElement("button", ["todo-item__btn", "todo-item__btn_delete"], todoItem, "&#10006;", {attrName: "type", value: "button"});
        
        dom.setText(todoText, todo.title);
        
        if(todo.status) dom.addClass(todoItem, "completed");

        todoCompleteBtn.addEventListener("click", () => {
            this._todos[index].status = !todo.status;
            this.render();
        });

        todoDeleteBtn.addEventListener("click", () => {
            this._todos = this._todos.filter((elem) => elem !== this._todos[index]);
            this.render();
        })
    }

    deleteTodos() {
        dom.deleteChildNodes(this.body);
    }

    fillFooter() {
        const todoInput = dom.createElement("input", "todo-input", this.footer, null, {attrName: "type", value: "text"});
        const todoAddItem = dom.createElement("button", "todo-add", this.footer, "Add Todo", {attrName: "type", value: "button"});

        todoAddItem.addEventListener("click", () => {
            if(!todoInput.length) {
                this._todos.push({
                    title: todoInput.value,
                    status: false,
                });
                todoInput.value = "";
                this.render();
            }
        })
    }

    render() {
        this.deleteTodos();
        this.loadTodos();
    }

    get todos() {
        return this._todos;
    }

    set todos(newTodos) {
        this._todos = newTodos;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const root = document.getElementById("root");
const dom = new DomManipulator();
const todoApp = new TodoApp("Learn JavaScript", [{title: "Do homework", status: false}, {title: "Learn datatypes", status: false}]);

todoApp.init();