import React, { useMemo, useState } from 'react';
import { ITodoItem, SortFieldType } from './types/types';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import TodoFilter from './components/TodoFilter/TodoFilter';
import Todos from './store/Todos';
import { observer } from 'mobx-react-lite';

import './App.sass';

const App: React.FC = observer(() => {
  const [selectedSort, setSelectedSort] = useState<SortFieldType>();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sortedTodos = useMemo(() => {
    if(selectedSort) {
      return [...Todos.todos].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return Todos.todos;
  }, [selectedSort]);

  const sortedAndSearchedTodos = useMemo(() => {
    return sortedTodos.filter(todo => todo.title.toLowerCase().includes(searchQuery));
  }, [searchQuery, sortedTodos]);

  const createTodo = (newTodo: ITodoItem) => {
    Todos.addTodo(newTodo);
  }

  const removeTodo = (todo: ITodoItem) => {
    Todos.removeTodo(todo);
  }

  const completeTodo = (todo: ITodoItem) => {
    Todos.completeTodo(todo);
  }

  return (
    <div className="app">
      <div className="container">
        <div className="todo-container">
          <TodoForm title="Todo List"  create={createTodo} />
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
            remove={removeTodo}
            ready={completeTodo}
            todos={Todos.todos}
          />
        </div>
      </div>
    </div>
  );
});

export default App;
