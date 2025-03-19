import { createContext, useEffect, useState } from "react";
import { Todo } from ".";
import { getTodos } from "../api/todoApi";

type TodosContextType = {
	todos: Todo[],
	createTodo: (todoTitle: string) => void,
	updateIsReadyTodo: (todoId: number, isReady: boolean) => void,
	deleteTodo: (todoId: number) => void
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
		getTodos()
			.then(data => setTodos(data));
	}, []);

	const createTodo = (todoTitle: string) => {
	
	}

	const updateIsReadyTodo = (todoId: number, isReady: boolean) => {

	}

	const deleteTodo = (todoId: number) => {
		
	}

	return (
		<TodosContext.Provider value={{todos, createTodo, updateIsReadyTodo, deleteTodo}}>
			{children}
		</TodosContext.Provider>
	)
}