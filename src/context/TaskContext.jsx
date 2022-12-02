import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext(); // createContext retorna un objeto, este objeto alamacena los datos
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const createTask = ({ title, description }) => {
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
    let newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  //TaskContextProvider es el componente que engloba al eresto de componentes
  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {/*Estoy pasando un objeto en la linea de arriba*/}
      {props.children}
    </TaskContext.Provider>
  );
}
