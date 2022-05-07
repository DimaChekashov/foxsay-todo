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
}

export default new Todos();
