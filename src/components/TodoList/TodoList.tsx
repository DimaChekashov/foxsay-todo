import React from 'react';
import { ITodoItem } from '../../types/types';
import TodoItem from '../TodoItem/TodoItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './TodoList.sass';

interface Props {
  todos: ITodoItem[];
  remove: (todo: ITodoItem) => void;
  ready: (todo: ITodoItem) => void;
}

const TodoList: React.FC<Props> = ({ todos, remove, ready }) => {
  return (
    <>
      {todos.length !== 0
        ? <TransitionGroup>
            {todos.map((todo, index) => (
              <CSSTransition
                key={todo.id}
                timeout={500}
                classNames="todo"
              >
                <TodoItem remove={remove} ready={ready} number={++index} todo={todo} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        : <div className="empty-title">Todo is empty!</div>
      }
    </>
  )
};

export default TodoList;
