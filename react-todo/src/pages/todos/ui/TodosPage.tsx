import { useContext } from "react";
import { TodoList } from "./TodoList";
import { TodosContext } from "../model";

export const TodosPage = () => {
	const {createTodo} = useContext(TodosContext);
	return (
		<>
			<TodoList />
			<button onClick={() => createTodo("Text 2")}>Add Todo</button>
		</>
	);
}