import Todo from "../models/Todo.js"

export const createTodo = async (todoData) => {
	return await Todo.create(todoData);
}

export const getTodos = async () => {
	return await Todo.find();
}
