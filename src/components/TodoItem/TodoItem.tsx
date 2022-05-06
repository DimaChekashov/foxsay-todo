import React from 'react';
import { ITodoItem } from '../../types/types';
import Button from '../UI/Button/Button';

import './TodoItem.sass';

interface Props {
    number: number;
    todo: ITodoItem;
    remove: (todo: ITodoItem) => void;
    ready: (todo: ITodoItem) => void;
}

const TodoItem: React.FC<Props> = ({ number, todo, remove, ready }) => {
  return (
    <div className={`todo${todo.isReady ? " ready" : ""}`}>
        <div className="todo__content" onClick={() => ready(todo)}>
            <div className="todo__title">
                <span className="todo__num">{number}.</span> 
                {todo.title}
            </div>
        </div>
        <div className="todo__btns">
            <Button onClick={() => remove(todo)}>Delete</Button>
        </div>
    </div>
  )
};

export default TodoItem;