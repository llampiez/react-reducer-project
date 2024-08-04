import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';

export const App = () => {
  const { todos, lengthTodos, lengthDoneTodos, deleteTodo, doneTodo, addTodo } = useTodos();

  return (
    <>
      <h1>
        TODOS: {lengthTodos} - PENDIENTES: {lengthDoneTodos}
      </h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList todos={todos} deleteTodo={deleteTodo} doneTodo={doneTodo} />
        </div>
        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <AddTodo addTodo={addTodo} />
        </div>
      </div>
    </>
  );
};
