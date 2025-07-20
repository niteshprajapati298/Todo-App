import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    
    <div className="shadow-2xl bg-white rounded-2xl pt-5 flex flex-col items-center gap-4 w-[400px] h-[400px]">
       <h1 className="bg-black-500 text-4xl font-semibold text-4xl">My To-Do List </h1>
      <TodoForm/>
      <TodoList/>
    </div>
  
  )
}
export default App;
