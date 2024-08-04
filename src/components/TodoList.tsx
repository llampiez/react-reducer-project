import { Todos } from '../types';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todos,
  deleteTodo: (idTodo: number) => void;
  doneTodo: (idTodo: number) => void;
}

export const TodoList = ({ todos, deleteTodo, doneTodo }: Props) => {
  return (
    <ul className='list-group'>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} doneTodo={doneTodo}/>
      ))}
    </ul>
  );
};
