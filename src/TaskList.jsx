import {TaskCard} from "./TaskCard";
export function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }

  return (
    <>
      {tasks.map((tasks,index) => (
        <TaskCard key={index} task={tasks}/>
      ))}
    </>
  );
}
