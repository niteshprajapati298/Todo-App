import React, { useContext, useState } from 'react'
import {  AddIcon } from '../constants/constants';
import { TodoContext } from '../context/TodoProvider';

const TodoForm = () => {
  const  {todos,setTodos} = useContext(TodoContext);

  const addTodo = ()=>{
        const todo = {id:todoName,text:todoName,completed:false}
        const upDatedTodo = [...todos,todo]
        setTodos(upDatedTodo)
  }
  const [todoName,setTodoName] = useState('');
  return (
    <div className='flex w-[80%] gap-2'>
      <input
      value={todoName}
      onChange={(e)=>setTodoName(e.target.value)}
       type='text'
       className='border-2  rounded-2xl h-[50px] w-full p-4 text-gray'
       placeholder='What do you need to do?'
       />
      <button onClick={()=>{
        addTodo();
        setTodoName('')

        }}>
        <AddIcon/>
</button>
    </div>
  )
}

export default TodoForm;
