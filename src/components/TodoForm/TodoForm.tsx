import React, { useState } from "react";
import { ITodoItem } from "../../types/types";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import './TodoForm.sass';

interface Props {
  create: (newTodo: ITodoItem) => void;
  title: string;
}

const TodoForm: React.FC<Props> = ({ create, title }) => {
  const [todoTitle, setTodoTitle] = useState<string>("");

  const addNewTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    create({
      id: Date.now(),
      title: todoTitle,
      isReady: false
    });

    setTodoTitle("");
  }

  return (
    <form className="todo-form">
      <h1 className="title">{title}</h1>
      <Input
        value={todoTitle}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodoTitle(e.target.value)}
        type="text" 
        placeholder="Todo title"
      />
      <Button onClick={addNewTodo}>Create todo</Button>
    </form>
  )
};

export default TodoForm;