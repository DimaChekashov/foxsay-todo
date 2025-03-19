import { createContext, useEffect, useState } from "react";
import { Todo } from ".";
import { getTodosQuery, createTodoQuery } from "../api/todoApi";

type TodosContextType = {
	todos: Todo[],
	createTodo: (todoTitle: string) => void,
	updateIsReadyTodo: (todoId: string, isReady: boolean) => void,
	deleteTodo: (todoId: string) => void
}

export const TodosContext = createContext<TodosContextType>({
	todos: [],
	createTodo: () => {},
	updateIsReadyTodo: () => {},
	deleteTodo: () => {}
});

export const TodosProvider = ({children}: {children: React.ReactNode}) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		getTodosQuery()
			.then(data => setTodos(data));
	}, []);

	const createTodo = (todoTitle: string) => {
		createTodoQuery(todoTitle)
			.then(data => setTodos([...todos, data]));
	}

	const updateIsReadyTodo = (todoId: string, isReady: boolean) => {

	}

	const deleteTodo = (todoId: string) => {
		
	}

	return (
		<TodosContext.Provider value={{todos, createTodo, updateIsReadyTodo, deleteTodo}}>
			{children}
		</TodosContext.Provider>
	)
}