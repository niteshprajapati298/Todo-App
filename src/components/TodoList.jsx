import React, { useContext, useEffect, useRef } from 'react';
import { TodoContext } from '../context/TodoProvider';
import { CloseIcon } from '../constants/constants';

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);
 
  const toggleTodo = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  const deleteTodo = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  return (
    todos.length>0?(<div className="w-[80%] overflow-y-auto scrollbar-hide	">
      <div className="flex-1 justify-between">
        {todos.map((todo) => (
          <div>
          <div
            key={todo.id}
            className="flex items-center gap-4 text-2xl font-normal"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="appearance-none w-7 h-7 border-2 border-gray-400 rounded-md checked:bg-green-600 checked:border-green-600"
            />
            <div className="flex justify-between items-center w-full">

              <span className={todo.completed ? "line-through" : ""}>
                {todo.text}
              </span>

              <button onClick={() => deleteTodo(todo.id)} className="cursor-pointer">
                <CloseIcon />
              </button>
            </div>
            
          </div>
          <hr className="border-t border-gray-500 my-4" />
          </div>
        
        ))}
      </div>
    </div>):<div className='text-xl flex justify-center items-center w-full h-full'><span className='text-3xl opacity-[0.5] text-gray-500'>Add Your First To-do</span></div>

  );
};

export default TodoList;
