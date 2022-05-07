import { makeAutoObservable } from "mobx";
import { ITodoItem } from './../types/types';

class Todos {
    todos: ITodoItem[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo = (todo: ITodoItem) => {
        this.todos.push(todo);
    };

    removeTodo = (todo: ITodoItem) => {
        this.todos = this.todos.filter(t => t.id !== todo.id);
    }

    completeTodo = (todo: ITodoItem) => {
        this.todos = this.todos.map(t => t.id !== todo.id ? t : {...todo, isReady: !todo.isReady})
    }
}

export default new Todos();
