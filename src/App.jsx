import { TaskList } from "./TaskList";
import { TaskForm } from "./TaskForm";
import { tasks as data } from "./task";
import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (title, description) => {
    console.log(`Este es el objeto task: \n ${title} \n ${description} `)
    setTasks([
      ...tasks,
      {
        title: title,
        id: tasks.length,
        description: description,
      },
    ]);
  };

  return (
    <>
      <TaskForm task={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}
