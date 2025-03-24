import { createContext, useEffect, useState } from "react";
import { Todo } from ".";
import { getTodosQuery, createTodoQuery, updateIsReadyTodoQuery, deleteTodoQuery } from "../api/todoApi";

type TodosContextType = {
	todos: Todo[];
	createTodo: (title: Todo["title"]) => void;
	updateIsReadyTodo: (idAndIsReady: Omit<Todo, "title">) => void;
	deleteTodo: (id: Todo["_id"]) => void;
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

	const createTodo = (title: Todo["title"]) => {
		createTodoQuery(title)
			.then(data => setTodos([...todos, data]));
	}

	const updateIsReadyTodo = (idAndIsReady: Omit<Todo, "title">) => {
		updateIsReadyTodoQuery(idAndIsReady)
			.then(data => setTodos(todos.map(todo => todo._id === data._id ? { ...data, title: todo.title } : todo)));
	}

	const deleteTodo = (id: Todo["_id"]) => {
		deleteTodoQuery(id)
			.then(data => setTodos(todos.filter(todo => todo._id !== data._id)));
	}

	return (
		<TodosContext.Provider value={{todos, createTodo, updateIsReadyTodo, deleteTodo}}>
			{children}
		</TodosContext.Provider>
	)
}
