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

    removeClass(domElement, className) {
        domElement.classList.remove(className);
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
    constructor(parentBlock, title, status) {
        this._item = dom.createElement("div", "todo-item", parentBlock)
        this.todoText = dom.createElement("div", "todo-item__text", this._item);
        this._todoCompleteBtn = dom.createElement("button", ["todo-item__btn", "todo-item__btn_complete"], this._item, "&#10003;", "type:button");
        this._todoDeleteBtn = dom.createElement("button", ["todo-item__btn", "todo-item__btn_delete"], this._item, "&#10006;", "type:button");
        this.title = title;
        this.status = status;

        this.updateStatus(status);
        this.init();
    }

    init() {
        dom.setText(this.todoText, this.title);
    }

    updateStatus(status) {
        this.status = status;

        if(status) {
            dom.addClass(this._item, "completed");
        } else {
            dom.removeClass(this._item, "completed");
        }
    }

    get completeBtnDom() {
        return this._todoCompleteBtn;
    }

    get deleteBtnDom() {
        return this._todoDeleteBtn;
    }
}

class Search {
    constructor(parentBlock) {
        this.container = dom.createElement("div", "todo-search", parentBlock);
        this._searchInput = dom.createElement("input", "todo-search__input", this.container, null, ["type:text", "placeholder:Search..."]);
    }

    get searchInputDom() {
        return this._searchInput;
    }
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
        this.shadowTodos = todos;
        this.mainBlock = dom.createElement("div", "todo", root);
        this.header = dom.createElement("div", "todo-header", this.mainBlock);
        this.searchBlock = new Search(this.mainBlock);
        this.body = dom.createElement("div", "todo-body", this.mainBlock);
        this.footer = new Footer(this.mainBlock);
        this.searchQuery = "";
    }

    init() {
        dom.setText(this.header, this._name);
        this.loadTodos();
        this.footerActions();
        this.searchActions()
    }

    loadTodos() {
        this._todos = this._todos.map((todo, index) => ({...todo, dom: this.createTodo(todo, index)}));
    }

    createTodo(todo, index) {
        const todoItem = new TodoItem(this.body, todo.title, this._todos[index].status);

        todoItem.completeBtnDom.addEventListener("click", () => {
            this._todos[index].status = this.shadowTodos[index].status = !this._todos[index].status;
            todoItem.updateStatus(this._todos[index].status);
        });

        todoItem.deleteBtnDom.addEventListener("click", () => {
            this._todos = this._todos.filter((elem) => elem !== this._todos[index]);
            this.render();
        });

        return todoItem;
    }

    deleteTodos() {
        dom.deleteChildNodes(this.body);
    }

    footerActions() {
        this.footer.addBtnDom.addEventListener("click", () => {
            if(this.footer.inputDom.value !== "") {
                this.addTodo(this.footer.inputDom.value);
                this.updateTodosBySeach();
                this.footer.inputDom.value = "";
                this.render();
            }
        });
    }

    searchActions() {
        this.searchBlock.searchInputDom.addEventListener("input", (e) => {
            console.log("Main:", this._todos);
            console.log("Shadow:", this.shadowTodos);
            this.searchQuery = e.target.value;
            this.updateTodosBySeach();
            this.render();
        })
    }

    updateTodosBySeach() {
        this._todos = this.shadowTodos.filter((todo) => todo.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }

    addTodo(title) {
        this.shadowTodos.push({
            title,
            status: false,
        });
        this._todos.push({
            title,
            status: false,
        });
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