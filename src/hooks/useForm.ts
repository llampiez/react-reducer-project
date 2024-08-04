import { useState } from 'react';
import { Todo } from '../types';

export const useForm = (addTodo: (newTodo: Todo) => void) => {
  const [inputState, setInputState] = useState('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setInputState(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputState.length === 0) return;

    const newTodo = {
      id: new Date().getTime(),
      description: inputState,
      done: false,
    };

    addTodo(newTodo);
    setInputState('');
  };

  return {
    handleChange,
    handleSubmit,
    inputState
  }
}
