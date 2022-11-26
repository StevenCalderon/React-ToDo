import { TaskList } from "./TaskList";
import { TaskForm } from "./TaskForm";
import { tasks as data } from "./task";
import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: "Nueva Tarea",
      },
    ]);
  };

  return (
    <>
      <TaskForm taskTitle={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}
