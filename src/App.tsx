import React, { useState } from 'react';
import { ITodoItem } from './types/types';

import './App.sass';
import TodoList from './components/TodoList/TodoList';
import Button from './components/UI/Button/Button';

function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([
    {id: 1, title: "Javascript", body: "Description"},
    {id: 2, title: "Javascript 2", body: "Description"},
    {id: 3, title: "Javascript 3", body: "Description"}
  ]);

  return (
    <div className="app">
      <div className="container">
        <form>
          <input type="text" placeholder="Todo title" />
          <input type="text" placeholder="Todo description" />
          <Button>Create todo</Button>
        </form>

        <TodoList todos={todos} title="Todo List" />
      </div>
    </div>
  );
}

export default App;
