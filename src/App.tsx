import React, { useState } from 'react';
import { ITodoItem } from './types/types';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

import './App.sass';

function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([
    {id: 1, title: "Javascript", body: "Description"},
    {id: 2, title: "Javascript 2", body: "Description"},
    {id: 3, title: "Javascript 3", body: "Description"}
  ]);

  const createTodo = (newTodo: ITodoItem) => {
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="app">
      <div className="container">
        <TodoForm create={createTodo} />

        <TodoList todos={todos} title="Todo List" />
      </div>
    </div>
  );
}

export default App;
