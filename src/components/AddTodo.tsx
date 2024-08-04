import { Todo } from '../types';
import { useForm } from '../hooks/useForm';

type Props = {
  addTodo: (newTodo: Todo) => void;
};

export const AddTodo = ({ addTodo }: Props) => {
  const {inputState, handleChange, handleSubmit} = useForm(addTodo)

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='¿Qué hay que hacer?'
        className='form-control'
        value={inputState}
        onChange={handleChange}
      />
      <button type='submit' className='btn btn-outline-primary mt-2'>
        Agregar
      </button>
    </form>
  );
};
