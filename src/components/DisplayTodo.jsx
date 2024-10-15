import { useState } from "react";
import { useTodo } from "../contexts/TodoContxt";

const DisplayTodo = () => {
  const { todos, updateTodos, deleteTodos, updateComplete } = useTodo();

  const [editingId, setEditingId] = useState(null);
  const [newTodo, setNewTodo] = useState("");

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
  };

  const handleSaveClick = (id) => {
    if (newTodo.trim() === "") return;
    updateTodos(id, newTodo);
    setEditingId(null);
    setNewTodo("");
  };

  return (
    <div className="max-w-[500px] mx-auto flex flex-col items-center justify-center mt-1">
      <h1 className="text-2xl font-semibold">List of Todos Added</h1>
      <table className="min-w-full border border-gray-400 mt-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Id</th>
            <th className="border border-gray-300 px-4 py-2">
              Todo Description
            </th>
            <th className="border border-gray-300 px-4 py-2">Completed</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
          
        </thead>
        <tbody>
          {todos.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-2">
                No todos available.
              </td>
            </tr>
          ) : (
            todos.map((todo,index) => (
                <tr key={todo.id} className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                <td className="border border-gray-300 px-4 py-2">{todo.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex">
                    <input
                      type="text"
                      readOnly={editingId !== todo.id}
                      onChange={(e) => setNewTodo(e.target.value)}
                      value={editingId === todo.id ? newTodo : todo.todo}
                      className="outline-none rounded-md p-2 text-black"
                    />
                    <div className="space-x-2 flex">
                      {editingId === todo.id ? (
                        <button
                          onClick={() => handleSaveClick(todo.id)} // Save changes
                          className="bg-green-400 px-3 rounded-lg"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEditClick(todo)}
                          className="bg-green-400 px-3 rounded-lg"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center align-middle">
                  <input
                    type="checkbox"
                    className="size-5 rounded-md"
                    checked={todo.completed}
                    onChange={() => updateComplete(todo.id)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => deleteTodos(todo.id)} 
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTodo;
