import React from 'react';
import { ITodoItem } from '../../types/types';
import TodoItem from '../TodoItem/TodoItem';

import './TodoList.sass';

interface Props {
    todos: ITodoItem[],
    title: string
}

function TodoList({ todos, title }: Props) {
  return (
    <>
        <h1 className="title">{title}</h1>
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </>
  )
}

export default TodoList;