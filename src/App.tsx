import React, { useMemo, useState } from 'react';
import { ITodoItem, SortFieldType } from './types/types';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import TodoFilter from './components/TodoFilter/TodoFilter';

import './App.sass';
import Modal from './components/UI/Modal/Modal';
import Button from './components/UI/Button/Button';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([
    {id: 1, title: "c", body: "b"},
    {id: 2, title: "b", body: "c"},
    {id: 3, title: "a", body: "a"}
  ]);
  const [selectedSort, setSelectedSort] = useState<SortFieldType>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

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
    setModal(false);
  }

  const removeTodo = (todo: ITodoItem) => {
    setTodos(todos.filter(t => t.id !== todo.id));
  }

  return (
    <div className="app">
      <Modal visible={modal} setVisible={setModal}>
        <TodoForm create={createTodo} />
      </Modal>
      <div className="container">
        <Button onClick={() => setModal(true)}>Create Todo</Button>
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
