import React from 'react';
import { ITodoItem } from '../../types/types';

import './TodoItem.sass';

interface Props {
    todo: ITodoItem
}

function TodoItem(props: Props) {
  return (
    <div className="todo">
        <div className="todo__content">
            <strong>{props.todo.id}. {props.todo.title}</strong>
            <div>
                {props.todo.body}
            </div>
        </div>
        <div className="todo__btns">
            <button>Delete</button>
        </div>
    </div>
  )
}

export default TodoItem;