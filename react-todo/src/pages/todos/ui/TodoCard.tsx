import { Button, Card } from "antd";
import { CheckOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { Todo } from "../model/types";

export const TodoCard = ({title, isReady}: Todo) => {
	return (
		<Card title={title} style={{ opacity: isReady ? 0.5 : 1}}>
			<div className="flex justify-between">
				<Button color={isReady ? "primary" : "purple"} variant="solid" size="large" icon={isReady ? <CheckOutlined /> : <CloseOutlined />}>
					{isReady ? "Выполнено" : "Не выполнено"}
				</Button>
				<Button color="danger" variant="filled" size="large" icon={<DeleteOutlined />}>Удалить</Button>
			</div>
		</Card>
	);
}
