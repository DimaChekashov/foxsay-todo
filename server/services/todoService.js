import Todo from "../models/Todo.js"

export const createTodo = async (todoData) => {
	return await Todo.create(todoData);
}

export const getTodos = async () => {
	return await Todo.find();
}

export const updateIsReady = async (todoId, isReady) => {
	return await Todo.findByIdAndUpdate(todoId, {isReady}, {new: true});
}

export const deleteTodo = async (todoId) => {
	return await Todo.findByIdAndDelete(todoId);
}
