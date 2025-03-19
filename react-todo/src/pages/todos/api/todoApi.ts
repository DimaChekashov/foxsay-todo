import { Todo } from "../model";

const API_URL = import.meta.env.VITE_API_URL;

export const getTodosQuery = async (): Promise<Todo[]> => {
	return await fetch(`${API_URL}/todos`).then(res => res.json());
}

export const createTodoQuery = async (title: Todo["title"]): Promise<Todo> => {
	return await fetch(`${API_URL}/todos`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({title: title})
	})
		.then(res => res.json());
}

export const updateIsReadyTodoQuery = async (idAndIsReady: Omit<Todo, "title">): Promise<Todo> => {
	return await fetch(`${API_URL}/todos/`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({...idAndIsReady})
	})
		.then(res => res.json());
}

export const deleteTodoQuery = async (id: Todo["_id"]): Promise<Todo> => {
	return await fetch(`${API_URL}/todos`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({_id: id})
	})
		.then(res => res.json());
}
