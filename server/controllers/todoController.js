import * as todoService from '../services/todoService.js';

export const createTodo = async (req, res) => {
	try {
		const todo = await todoService.createTodo(req.body);
		res.status(201).json(todo)
	} catch (error) {
		res.status(400).json({error: error.message});
	}
}
