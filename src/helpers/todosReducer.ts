import { Todo, Todos } from '../types';

type ActionAdd = {
  type: 'ADD TODO';
  payload: Todo;
};

type ActionDelete = {
  type: 'DELETE TODO';
  payload: number;
};

type ActionDone = {
  type: 'DONE TODO';
  payload: number;
};

type Action = ActionAdd | ActionDelete | ActionDone;

export const todosReducer = (todos: Todos, action: Action) => {
  switch (action.type) {
    case 'ADD TODO':
      return [...todos, action.payload];
    case 'DELETE TODO':
      return todos.filter(todo => todo.id !== action.payload);
    case 'DONE TODO':
      return todos.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });
    default:
      return todos;
  }
};
