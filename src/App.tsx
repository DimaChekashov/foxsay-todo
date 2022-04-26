import React, { useState } from 'react';
import { ITodoItem } from './types/types';

import './App.sass';
import TodoList from './components/TodoList/TodoList';
import Button from './components/UI/Button/Button';
import Input from './components/UI/Input/Input';

function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([
    {id: 1, title: "Javascript", body: "Description"},
    {id: 2, title: "Javascript 2", body: "Description"},
    {id: 3, title: "Javascript 3", body: "Description"}
  ]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const addNewTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  return (
    <div className="app">
      <div className="container">
        <form>
          <Input
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            type="text" 
            placeholder="Todo title" 
          />
          <Input 
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
            type="text" 
            placeholder="Todo description" 
          />
          <Button onClick={addNewTodo}>Create todo</Button>
        </form>

        <TodoList todos={todos} title="Todo List" />
      </div>
    </div>
  );
}

export default App;
