import { TodoCard } from "./TodoCard";

export const TodoList = () => {
	return (
		<div className="flex flex-col gap-6">
			<TodoCard id={1} title="Task 1" isReady={false}  />
			<TodoCard id={2} title="Task 2" isReady={false}  />
			<TodoCard id={3} title="Task 3" isReady={true}  />
			<TodoCard id={4} title="Task 4" isReady={false}  />
		</div>
	);
}
