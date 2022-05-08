import React, { useState } from 'react';
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

  const completeTodo = (todo: ITodoItem) => Todos.completeTodo(todo);
  
  const createTodo = (newTodo: ITodoItem) => Todos.addTodo(newTodo);
  
  const removeTodo = (todo: ITodoItem) => Todos.removeTodo(todo);

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
            selectedSort={selectedSort}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </div>
  );
});

export default App;
