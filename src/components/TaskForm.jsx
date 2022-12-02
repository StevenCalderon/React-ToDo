import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const { createTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl text-white font-bold mb-3">Crea tu Tarea</h1>
        <input
          className="bg-slate-900 p-3 w-full mb-2 text-white"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-900 p-3 w-full mb-2 text-white"
          placeholder="Descipcion de la tarea"
          cols="30"
          rows="10"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className="bg-green-700 px-3 py-1 text-white hover:bg-green-800">
          Guardar
        </button>
      </form>
    </div>
  );
}
