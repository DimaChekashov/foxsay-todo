import React, { useMemo, useState } from 'react';
import { ITodoItem } from './types/types';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

import './App.sass';
import Select from './components/UI/Select/Select';
import Input from './components/UI/Input/Input';

function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([
    {id: 1, title: "aa", body: "bb"},
    {id: 2, title: "bb 2", body: "aa"},
    {id: 3, title: "vv 3", body: "vv"}
  ]);
  const [selectedSort, setSelectedSort] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sortedTodos = useMemo(() => {
    if(selectedSort) {
      return [...todos].sort((a, b) => 
        (a[selectedSort as keyof ITodoItem] as string)
          .localeCompare(b[selectedSort as keyof ITodoItem] as string)
      )
    }
    return todos;
  }, [selectedSort, todos]);

  const createTodo = (newTodo: ITodoItem) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todo: ITodoItem) => {
    setTodos(todos.filter(t => t.id !== todo.id));
  }

  const sortTodos = (sort: string) => {
    setSelectedSort(sort);
  }

  return (
    <div className="app">
      <div className="container">
        <TodoForm create={createTodo} />

        <div>
          <Input 
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search..."
          />
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

        <TodoList remove={removeTodo} todos={sortedTodos} title="Todo List" />
      </div>
    </div>
  );
}

export default App;
