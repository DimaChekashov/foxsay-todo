import React, { useMemo } from 'react';
import { ITodoItem, SortFieldType } from '../../types/types';
import TodoItem from '../TodoItem/TodoItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './TodoList.sass';
import { observer } from 'mobx-react-lite';

interface Props {
  todos: ITodoItem[];
  remove: (todo: ITodoItem) => void;
  ready: (todo: ITodoItem) => void;
  selectedSort: SortFieldType | undefined;
  searchQuery: string;
}

const TodoList: React.FC<Props> = observer(({ todos, remove, ready, searchQuery, selectedSort }) => {

  const sortedTodos = useMemo(() => {
    if(selectedSort) {
      return [...todos].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return todos;
  }, [selectedSort, todos]);

  const sortedAndSearchedTodos = useMemo(() => {
    console.log(sortedTodos);
    return sortedTodos.filter(todo => todo.title.toLowerCase().includes(searchQuery));
  }, [searchQuery, sortedTodos]);

  return (
    <>
      {todos.length !== 0
        ? <TransitionGroup>
            {sortedAndSearchedTodos.map((todo, index) => (
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
});

export default TodoList;
