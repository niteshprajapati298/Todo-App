import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Finish React project", completed: true },
    { id: 3, text: "Go for a run", completed: false },
    { id: 4, text: "Call mom", completed: false },
    { id: 5, text: "Read a book", completed: true },
  ]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
