import React, { useEffect, useMemo, useState } from 'react';
import { ITodoItem, SortFieldType } from '../../types/types';
import TodoItem from '../TodoItem/TodoItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { observer } from 'mobx-react-lite';

import './TodoList.sass';

interface Props {
  todos: ITodoItem[];
  remove: (todo: ITodoItem) => void;
  ready: (todo: ITodoItem) => void;
  selectedSort: SortFieldType | undefined;
  searchQuery: string;
}

const TodoList: React.FC<Props> = observer(({ todos, remove, ready, searchQuery, selectedSort }) => {
  const [todoList, setTodoList] = useState<ITodoItem[]>(todos);

  useEffect(() => {
    setTodoList(todos)
  }, [todos]);

  const sortedTodos = useMemo(() => {
    if(selectedSort) {
      return [...todos].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return todos;
  }, [selectedSort, todos]);

  useMemo(() => {
    setTodoList(sortedTodos.filter(todo => todo.title.toLowerCase().includes(searchQuery.toLowerCase())));
  }, [searchQuery, sortedTodos]);

  return (
    <>
      {todoList.length !== 0
        ? <TransitionGroup>
            {todoList.map((todo, index) => (
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
