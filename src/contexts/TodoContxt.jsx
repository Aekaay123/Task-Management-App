/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
export const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};
// eslint-disable-next-line react/prop-types
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodos = (newTodo) => {
    setTodos((prev) => [{ id: Date.now(), todo:newTodo, completed:Math.floor(Math.random()*3)===2?false:true }, ...prev]);
  };

  const updateTodos = (id, todo) => {
    setTodos((prev) => {
      return prev.map((prevTodos) => {
        if (prevTodos.id === id) {
          return { ...prevTodos, todo };
        }
        return prevTodos;
      });
    });
  };

  const deleteTodos = (id) => {
    setTodos((prev) => {
      return prev.filter((prevTodos) => prevTodos.id !== id);
    });
  };

  const updateComplete = (id) => {
    setTodos((prev) => {
      return prev.map((prevTodos) => {
        if (prevTodos.id === id) {
          return { ...prevTodos, completed: !prevTodos.completed };
        }
        return prevTodos;
      });
    });
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodos, updateTodos, deleteTodos, updateComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};
