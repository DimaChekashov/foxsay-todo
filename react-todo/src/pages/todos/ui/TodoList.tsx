import { useContext } from "react";
import { TodoCard } from "./TodoCard";
import { TodosContext } from "../model/TodosContext";

export const TodoList = () => {
	const {todos} = useContext(TodosContext);

	return (
		<div className="flex flex-col gap-6">
			{todos.map((todo) => <TodoCard key={todo.id} id={todo.id} title={todo.title} isReady={todo.isReady}  />)}
		</div>
	);
}
