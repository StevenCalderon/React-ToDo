import { useState, useEffect } from "react";
import { tasks as data } from "./task";


export function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }

  return (
    <>
      {tasks.map((tasks) => (
        <div key={tasks.id}>
            <h1>{tasks.title}</h1>
            <p>{tasks.description}</p>

        </div>
      ))}
    </>
  );
}
