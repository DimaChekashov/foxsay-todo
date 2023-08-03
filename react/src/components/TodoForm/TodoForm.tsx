import React, { useState } from "react";
import { ITodoItem } from "../../types/types";
import Alert from "../UI/Alert/Alert";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import './TodoForm.sass';

interface Props {
  create: (newTodo: ITodoItem) => void;
  title: string;
}

const TodoForm: React.FC<Props> = ({ create, title }) => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
 
  const addNewTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if(todoTitle) {
      create({
        id: Date.now(),
        title: todoTitle,
        isReady: false
      });
      setTodoTitle("");
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
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
      <Alert show={showAlert}>
        Please fill the field!
      </Alert>
    </form>
  )
};

export default TodoForm;