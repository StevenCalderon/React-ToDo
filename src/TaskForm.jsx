import { useState, useEffect } from "react";

export function TaskForm({ task }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    task(title, description);
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Descipcion de la tarea"
          cols="30"
          rows="10"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button>Guardar</button>
      </form>
    </>
  );
}
