import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
export function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center py-5 ">
        No hay tareas aun
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((tasks) => (
        <TaskCard key={tasks.id} task={tasks} />
      ))}
    </div>
  );
}
