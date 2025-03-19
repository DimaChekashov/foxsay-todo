import { useContext } from "react";
import { TodosContext } from "../model";
import { Button, Form, Input } from "antd";

type FormType = {
	title: string;
}

export const TodoForm = () => {
	const {createTodo} = useContext(TodosContext);
	const [form] = Form.useForm(); 
	
	const onCreateTodo = (values: FormType) => {
		const { title } = values;
		createTodo(title);
		form.resetFields();
	}

	return (
		<Form form={form} onFinish={onCreateTodo}>
			<Form.Item label="Название задачи" name="title" rules={[{ required: true, message: "Введите название задачи!" }]}>
				<Input />
			</Form.Item>

			<Form.Item label="">
				<Button type="primary" htmlType="submit">
					Создать задачу
				</Button>
			</Form.Item>
		</Form>
	);
}
