import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    
    <div className=" bg-white border-2 border-gray-200 rounded-2xl pt-5 flex flex-col items-center gap-4 border-4 border-orange-300 w-[400px] h-[400px]">
       <h1 className="bg-black-500 text-4xl font-semibold text-4xl">My To-Do List </h1>
      <TodoForm/>
      <TodoList/>
    </div>
  
  )
}
export default App;
