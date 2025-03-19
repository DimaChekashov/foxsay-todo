import * as todoService from '../services/todoService.js';

export const createTodo = async (req, res) => {
	try {
		const todo = await todoService.createTodo(req.body);
		res.status(201).json(todo)
	} catch (error) {
		res.status(400).json({error: error.message});
	}
}

export const getTodos = async (req, res) => {
	try {
		const todos = await todoService.getTodos();
		res.status(200).json(todos);
	} catch (error) {
		res.status(500).json({error: error.message});
	}
}