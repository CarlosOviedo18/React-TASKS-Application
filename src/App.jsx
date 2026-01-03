import { useState, useEffect } from 'react';
import Auth from './components/Auth';
import Menu from './components/Menu';
import HomePage from './components/pages/HomePage';
import TasksPage from './components/pages/TasksPage';
import AuthController from './controllers/authController';
import TaskController from './controllers/taskController';
import { task as initialData } from './tasks';

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [editingTask, setEditingTask] = useState(null);

  // Verificar si hay usuario logueado
  useEffect(() => {
    const savedUser = AuthController.getCurrentUser();
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  // Cargar tareas del usuario
  useEffect(() => {
    if (user) {
      const userTasks = TaskController.getTasks(user.id);
      if (userTasks.length === 0) {
        // Si no hay tareas, usar las iniciales
        setTasks(initialData);
        TaskController.saveTasks(user.id, initialData);
      } else {
        setTasks(userTasks);
      }
    }
  }, [user]);

  // Guardar tareas cuando cambien
  useEffect(() => {
    if (user && tasks.length > 0) {
      TaskController.saveTasks(user.id, tasks);
    }
  }, [tasks, user]);

  // Handlers de autenticación
  const handleLogin = (loggedUser) => {
    setUser(loggedUser);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    AuthController.logout();
    setUser(null);
    setTasks([]);
    setEditingTask(null);
  };

  // Handlers de tareas
  const handleAddTask = (newTask) => {
    if (editingTask) {
      // Actualizar tarea existente
      setTasks(tasks.map(task => task.id === editingTask.id ? newTask : task));
      setEditingTask(null);
    } else {
      // Agregar nueva tarea
      setTasks([...tasks, newTask]);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setCurrentPage('tareas');
  };

  const handleDeleteTask = (taskId) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      setTasks(tasks.filter(task => task.id !== taskId));
    }
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleToggleCompleteTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setEditingTask(null);
  };

  // Mostrar pantalla de login si no hay usuario
  if (!user) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <>
      <Menu 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
        user={user} 
        onLogout={handleLogout} 
      />
      <div className="min-h-screen">
        {currentPage === 'home' && (
          <HomePage user={user} onNavigate={navigateTo} />
        )}

        {currentPage === 'tareas' && (
          <TasksPage 
            tasks={tasks}
            editingTask={editingTask}
            onSubmit={handleAddTask}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onCancel={handleCancelEdit}
            onToggleComplete={handleToggleCompleteTask}
          />
        )}
      </div>
    </>
  );
}

export default App;



