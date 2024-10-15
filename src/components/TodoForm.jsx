import { useState } from "react";
import { useTodo } from "../contexts/TodoContxt";

const TodoForm = () => {
  const [todo, setTodo] = useState("");

  const { addTodos} = useTodo();
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(todo);
    alert("todos saved to local storage successfully")
    setTodo("");

  };
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex items-center justify-center mt-10 border py-20 border-gray-400 rounded-md max-w-[500px] mx-auto flex-col"
      >
        <h1 className="text-5xl font-Courgette font-bold mb-5">To do App</h1>
        <div className="space-x-2">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add new todo here.."
            className="bg-white border border-gray-500 px-2 py-2 rounded-md outline-none"
          />
          <button
            type="submit"
            className="text-md bg-orange-700 hover:bg-blue-700 rounded-md px-6 font-bold py-2"
          >
            ADD
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
