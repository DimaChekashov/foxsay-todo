import { useContext } from "react";
import { TodoCard } from "./TodoCard";
import { TodosContext } from "../model";

export const TodoList = () => {
	const {todos} = useContext(TodosContext);

	return (
		<div className="flex flex-col gap-6">
			{todos.map((todo) => <TodoCard key={todo._id} todo={todo} />)}
		</div>
	);
}
