import { Todo } from '../types';

type Props = {
  todo: Todo;
  deleteTodo: (idTodo: number) => void;
  doneTodo: (idTodo: number) => void;
};

export const TodoItem = ({ todo, deleteTodo, doneTodo }: Props) => {
  return (
    <li key={todo.id} className='list-group-item d-flex justify-content-between'>
      <span
        onClick={() => doneTodo(todo.id)}
        className={`align-self-center${todo.done ? ' text-decoration-line-through' : ''}`}>
        {todo.description}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className='btn btn-danger'>
        Borrar
      </button>
    </li>
  );
};
