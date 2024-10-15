// import { useState } from "react";
import DisplayTodo from "./components/DisplayTodo";
import TodoForm from "./components/TodoForm";
import { TodoProvider } from "./contexts/TodoContxt";

function App() {
  return (
    <>
      <TodoProvider>
          <TodoForm />
          <DisplayTodo />    
      </TodoProvider>
    </>
  );
}

export default App;
