import React from 'react';
import { ITodoItem } from '../../types/types';
import TodoItem from '../TodoItem/TodoItem';

import './TodoList.sass';

interface Props {
  title: string;
  todos: ITodoItem[];
  remove: (todo: ITodoItem) => void;
}

const TodoList: React.FC<Props> = ({ todos, title, remove }) => {
  return (
    <>
        <h1 className="title">{title}</h1>

        {todos.length !== 0
          ? todos.map((todo, index) => <TodoItem remove={remove} number={++index} key={todo.id} todo={todo} />)
          : <div className="empty-title">Todo is empty!</div>
        }
    </>
  )
};

export default TodoList;
