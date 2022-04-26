import React, { useMemo, useState } from 'react';
import { ITodoItem } from './types/types';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

import './App.sass';
import Select from './components/UI/Select/Select';
import Input from './components/UI/Input/Input';

type SortFieldType = "title" | "body";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([
    {id: 1, title: "c", body: "b"},
    {id: 2, title: "b", body: "c"},
    {id: 3, title: "a", body: "a"}
  ]);
  const [selectedSort, setSelectedSort] = useState<SortFieldType>();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sortedTodos = useMemo(() => {
    if(selectedSort) {
      return [...todos].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
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
    setSelectedSort(sort as SortFieldType);
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
            value={selectedSort as string}
            onChange={sortTodos}
            noValueLabel="Select Sort"
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
