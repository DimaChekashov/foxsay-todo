import { Button, Card } from "antd";
import { CheckOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { Todo, TodosContext } from "../model";
import { useContext } from "react";

type TodoCardProps = {
	todo: Todo;
}

export const TodoCard = ({todo}: TodoCardProps) => {
	const {updateIsReadyTodo, deleteTodo} = useContext(TodosContext);
	const {_id, title, isReady} = todo;
	
	return (
		<Card title={title} style={{ opacity: isReady ? 0.5 : 1}}>
			<div className="flex justify-between">
				<Button 
					color={isReady ? "primary" : "purple"} 
					variant="solid" 
					size="large" 
					icon={isReady ? <CheckOutlined /> : <CloseOutlined />}
					onClick={() => updateIsReadyTodo({_id: _id,  isReady: !isReady})}
				>
					{isReady ? "Выполнено" : "Не выполнено"}
				</Button>
				<Button 
					color="danger" 
					variant="filled" 
					size="large" 
					icon={<DeleteOutlined />}
					onClick={() => deleteTodo(_id)}
				>
					Удалить
				</Button>
			</div>
		</Card>
	);
}
