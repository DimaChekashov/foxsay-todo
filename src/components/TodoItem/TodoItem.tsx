import React from 'react';
import { ITodoItem } from '../../types/types';
import Button from '../UI/Button/Button';

import './TodoItem.sass';

interface Props {
    todo: ITodoItem,
    number: number,
    remove: (todo: ITodoItem) => void
}

function TodoItem({ number, todo, remove }: Props) {
  return (
    <div className="todo">
        <div className="todo__content">
            <div className="todo__title">
                <span className="todo__num">{number}.</span> 
                {todo.title}
            </div>
            <div className="todo__text">
                {todo.body}
            </div>
        </div>
        <div className="todo__btns">
            <Button onClick={() => remove(todo)}>Delete</Button>
        </div>
    </div>
  )
}

export default TodoItem;