import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { tasks as data } from "./data/task";
import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = ({ title, description }) => {
    //console.log(`Este es el objeto task: \n ${task.title} \n ${task.description} `)
    setTasks([
      ...tasks,
      {
        title: title,
        id: tasks.length,
        description: description,
      },
    ]);
  };

  const deleteTask = (id) => {
   let newTask=tasks.filter(task=>task.id !== id)
   setTasks(newTask)
  };

  return (
    <>
      <TaskForm task={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}
