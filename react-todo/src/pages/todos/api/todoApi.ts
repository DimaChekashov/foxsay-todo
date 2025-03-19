const API_URL = import.meta.env.VITE_API_URL;

export const getTodos = async () => {
	return await fetch(`${API_URL}/todos`).then(res => res.json());
}
