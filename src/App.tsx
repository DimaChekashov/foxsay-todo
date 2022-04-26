import React, { useState } from 'react';
import { ITodoItem } from './types/types';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

import './App.sass';
import Select from './components/UI/Select/Select';

function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([
    {id: 1, title: "aa", body: "bb"},
    {id: 2, title: "bb 2", body: "aa"},
    {id: 3, title: "vv 3", body: "vv"}
  ]);

  const [selectedSort, setSelectedSort] = useState<string>('');

  const createTodo = (newTodo: ITodoItem) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todo: ITodoItem) => {
    setTodos(todos.filter(t => t.id !== todo.id));
  }

  const sortTodos = (sort: string) => {
    setSelectedSort(sort);
    setTodos([...todos].sort((a, b) => 
      (a[sort as keyof ITodoItem] as string).localeCompare(b[sort as keyof ITodoItem] as string)
    ));
  }

  return (
    <div className="app">
      <div className="container">
        <TodoForm create={createTodo} />

        <div>
          <Select
            value={selectedSort}
            onChange={sortTodos}
            defaultValue="Sort"
            options={[
              { value: "title", name: "By name" },
              { value: "body", name: "By description" }
            ]}
          />
        </div>

        <TodoList remove={removeTodo} todos={todos} title="Todo List" />
      </div>
    </div>
  );
}

export default App;
