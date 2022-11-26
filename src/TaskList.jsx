export function TaskList({tasks}) {
  

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
