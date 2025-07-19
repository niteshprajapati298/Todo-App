import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoProvider';
import { CloseIcon } from '../constants/constants';

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const toggleTodo = () =>{

  }
  return (
    <div className='border-2 border-black-300 w-[80%] pt-1 pb-1'>
      <div className='flex-col'>
        {todos.map((todo) => (
          <div key={todo.id} className='flex gap-4 text-2xl font-normal mt-4' >
            <input
              type="checkbox"
              checked={todo.completed}
              className="appearance-none w-7 border-2 border-gray-400 rounded-md checked:bg-blue-600 checked:border-blue-600"
            />
            <div className='flex mt-[-5px] gap-4'>
            <span>{todo.text} </span>
          <div className='mr  -0'><CloseIcon/></div>
          </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default TodoList;
