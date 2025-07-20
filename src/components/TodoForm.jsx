import React, { useContext, useState } from 'react'
import { AddIcon } from '../constants/constants';
import { TodoContext } from '../context/TodoProvider';

const TodoForm = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [todoName, setTodoName] = useState('');

  const addTodo = () => {
    if (todoName.trim().length===0) {
      alert('Please Enter Your Todo');
      return;
    };
    if (todoName.trim().length>22) alert('Please Enter a Valid Todo');
    else {
      const todo = { id: Date.now(), text: todoName, completed: false }
      const upDatedTodo = [...todos, todo]
      setTodos(upDatedTodo)
    }
  }

  return (
    <div className='flex w-[80%] gap-2'>
      <input
        value={todoName}
        required={true}
        min={1}
        max={20}
        onChange={(e) => setTodoName(e.target.value)}
        type='text'
        className='border-2  rounded-2xl h-[50px] w-full p-4 text-gray shadow-md'
        placeholder='What do you need to do?'
      />
      <button onClick={() => {
        addTodo();
        setTodoName('')

      }}>
        <AddIcon />
      </button>
    </div>
  )
}

export default TodoForm;
