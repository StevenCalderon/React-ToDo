import { useState, useEffect } from "react";

export function TaskForm({taskTitle}) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    taskTitle(title)

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
        <button>Guardar</button>
      </form>
    </>
  );
}
