class DomManipulator {
    getElement(className) {
        return document.querySelector(className);
    }

    createElement(tagName, className, enterTarget, innerText, attributes) {
        const element = document.createElement(tagName);

        if(Array.isArray(className)) {
            className.forEach((className) => element.classList.add(className));
        } else {
            element.classList.add(className);
        }

        if(attributes) {
            this.setAttr(element, attributes);
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

    setAttr(dom, attributes) {
        if(!attributes) return;

        if(Array.isArray(attributes)) {
            for(let i = 0; i < attributes.length; i++) {
                const splited = attributes[i].split(":");
                dom.setAttribute(splited[0], splited[1]);
            }
        } else {
            const splited = attributes.split(":");
            dom.setAttribute(splited[0], splited[1]);
        }
    }
}

class TodoItem {
}

class Footer {
    constructor(parentBlock) {
        this.container = dom.createElement("div", "todo-footer", parentBlock);
        this._todoNameInput = dom.createElement("input", "todo-input", this.container, null, ["type:text", "placeholder:What you want to do?"]);
        this._todoAddItemBtn = dom.createElement("button", "todo-add", this.container, "Add Todo", "type:button");
    }

    get inputDom() {
        return this._todoNameInput;
    }

    get addBtnDom() {
        return this._todoAddItemBtn;
    }
}

class TodoApp {
    constructor(name, todos) {
        this._name = name;
        this._todos = todos;
        this.mainBlock = dom.createElement("div", "todo", root);
        this.header = dom.createElement("div", "todo-header", this.mainBlock);
        this.searchBlock = dom.createElement("div", "todo-search", this.mainBlock);
        this.body = dom.createElement("div", "todo-body", this.mainBlock);
        this.footer = new Footer(this.mainBlock);
    }

    init() {
        dom.setText(this.header, this._name);
        this.fillSearchBlock();
        this.loadTodos();
        this.addTodo();
    }

    loadTodos() {
        this._todos.forEach((todo, index) => {
            this.createTodo(todo, index);
        });
    }

    createTodo(todo, index) {
        const todoItem = dom.createElement("div", "todo-item", this.body);
        const todoText = dom.createElement("div", "todo-item__text", todoItem);
        const todoCompleteBtn = dom.createElement("button", ["todo-item__btn", "todo-item__btn_complete"], todoItem, "&#10003;", "type:button");
        const todoDeleteBtn = dom.createElement("button", ["todo-item__btn", "todo-item__btn_delete"], todoItem, "&#10006;", "type:button");
        
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

    fillSearchBlock() {
        const searchInput = dom.createElement("input", "todo-search__input", this.searchBlock, null, ["type:text", "placeholder:Search..."]);
    }

    addTodo() {
        this.footer.addBtnDom.addEventListener("click", () => {
            if(!this.footer.inputDom.length) {
                this._todos.push({
                    title: this.footer.inputDom.value,
                    status: false,
                });
                this.footer.inputDom.value = "";
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