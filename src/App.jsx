import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import {task as data} from './tasks'
import {useState, useEffect} from 'react'


function App() {
  const [tasks, setTasks] = useState([]); //para cuadno se elimine o agrege una tarea

  useEffect(() => {
    setTasks(data);
  }, []); //se ejecuta una sola vez al montar el componente para cargar las tareas iniciales o mas a futuro para eliminar/agregar tareas

  return (
    <>
      <TaskForm />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
