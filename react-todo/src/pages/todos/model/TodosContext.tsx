import { createContext, useState } from "react";
import { Todo } from ".";

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
	const [todos, setTodos] = useState<Todo[]>([
		{
			id: 1,
			title: "Text 1",
			isReady: false
		},
		{
			id: 2,
			title: "Text 2",
			isReady: true
		},
		{
			id: 3,
			title: "Text 3",
			isReady: false
		},
	]);

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