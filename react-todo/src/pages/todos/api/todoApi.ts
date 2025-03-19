const API_URL = import.meta.env.VITE_API_URL;

export const getTodosQuery = async () => {
	return await fetch(`${API_URL}/todos`).then(res => res.json());
}

export const createTodoQuery = async (todoTitle: string) => {
	return await fetch(`${API_URL}/todos`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({title: todoTitle})
	})
		.then(res => res.json());
}

export const updateIsReadyTodoQuery = async (todoId: string, todoIsReady: boolean) => {
	
}