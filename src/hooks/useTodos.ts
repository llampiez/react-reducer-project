import { useEffect, useReducer } from 'react';
import { todosReducer } from '../helpers/todosReducer';
import { Todo } from '../types';

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || '[]');
};

export const useTodos = () => {
  const [todos, dispatchTodos] = useReducer(todosReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo: Todo) => {
    dispatchTodos({
      type: 'ADD TODO',
      payload: newTodo,
    });
  };

  const deleteTodo = (idTodo: number) => {
    dispatchTodos({
      type: 'DELETE TODO',
      payload: idTodo,
    });
  };

  const doneTodo = (idTodo: number) => {
    dispatchTodos({
      type: 'DONE TODO',
      payload: idTodo,
    });
  };

  return {
    todos,
    lengthTodos: todos.length,
    lengthDoneTodos: todos.filter(todo => !todo.done).length,
    addTodo,
    deleteTodo,
    doneTodo,
  };
};
