import React, { useMemo, useState } from 'react';
import { ITodoItem, SortFieldType } from './types/types';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import TodoFilter from './components/TodoFilter/TodoFilter';

import './App.sass';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([
    {id: 1, title: "Создать задачу", isReady: false},
    {id: 2, title: "b", isReady: false},
    {id: 3, title: "a", isReady: false}
  ]);
  const [selectedSort, setSelectedSort] = useState<SortFieldType>();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sortedTodos = useMemo(() => {
    if(selectedSort) {
      return [...todos].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return todos;
  }, [selectedSort, todos]);

  const sortedAndSearchedTodos = useMemo(() => {
    return sortedTodos.filter(todo => todo.title.toLowerCase().includes(searchQuery));
  }, [searchQuery, sortedTodos]);

  const createTodo = (newTodo: ITodoItem) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todo: ITodoItem) => {
    setTodos(todos.filter(t => t.id !== todo.id));
  }

  return (
    <div className="app">
      <div className="container">
        <TodoForm create={createTodo} />
        <TodoFilter 
          filter={{ 
            sort: selectedSort, 
            query: searchQuery 
          }} 
          setFilter={{ 
            setSelectedSort, 
            setSearchQuery
          }} 
        />

        <TodoList 
          title="Todo List" 
          remove={removeTodo} 
          todos={sortedAndSearchedTodos}
        />
      </div>
    </div>
  );
}

export default App;
