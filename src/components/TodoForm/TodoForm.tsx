import React, { useState } from "react";
import { ITodoItem } from "../../types/types";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import './TodoForm.sass';

interface Props {
  create: (newTodo: ITodoItem) => void;
}

const TodoForm: React.FC<Props> = ({ create }) => {
  const [todo, setTodo] = useState<{ 
    title: string, 
    body: string 
  }>({
    title: "",
    body: ""
  });

  const addNewTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const newTodo = {
      ...todo, id: Date.now()
    }

    create(newTodo);

    setTodo({ title: "", body: "" });
  }

  return (
    <form className="todo-form">
      <Input
        value={todo.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo({ ...todo, title: e.target.value })}
        type="text" 
        placeholder="Todo title" 
      />
      <Input 
        value={todo.body}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo({ ...todo, body: e.target.value })}
        type="text" 
        placeholder="Todo description" 
      />
      <Button onClick={addNewTodo}>Create todo</Button>
    </form>
  )
};

export default TodoForm;