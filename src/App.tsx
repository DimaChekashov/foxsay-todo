import React, { useState } from 'react';
import TodoItem from './components/TodoItem/TodoItem';

import './App.sass';
import { ITodoItem } from './types/types';

function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([
    {id: 1, title: "Javascript", body: "Description"},
    {id: 2, title: "Javascript 2", body: "Description"},
    {id: 3, title: "Javascript 3", body: "Description"}
  ]);

  return (
    <div className="app">
      <div className="container">
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
}

export default App;
