import { makeAutoObservable } from "mobx";
import { ITodoItem } from './../types/types';

class Todos {
    todos: ITodoItem[] = [];


    constructor() {
        makeAutoObservable(this);
    }

    loadLocalTodos = (todos: ITodoItem[]) => {
        this.todos = todos;
    }

    addToLocalStorage = () => {
        localStorage.setItem("todos", JSON.stringify([...this.todos]));
    }

    addTodo = (todo: ITodoItem) => {
        this.todos.push(todo);
        this.addToLocalStorage();
    };

    removeTodo = (todo: ITodoItem) => {
        this.todos = this.todos.filter(t => t.id !== todo.id);
        this.addToLocalStorage();
    }

    completeTodo = (todo: ITodoItem) => {
        this.todos = this.todos.map(t => t.id !== todo.id ? t : {...todo, isReady: !todo.isReady})
        this.addToLocalStorage();
    }
}

export default new Todos();
