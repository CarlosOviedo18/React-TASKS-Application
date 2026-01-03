import Task from '../models/Task';

class TaskController {
  // Obtener todas las tareas del usuario
  static getTasks(userId) {
    return Task.getUserTasks(userId);
  }

  // Crear nueva tarea
  static createTask(userId, title, description = '') {
    const error = Task.validate(title);
    if (error) {
      return { success: false, error };
    }

    const task = Task.create(title, description);
    Task.addTask(userId, task);

    return { success: true, task };
  }

  // Actualizar tarea
  static updateTask(userId, taskId, title, description = '') {
    const error = Task.validate(title);
    if (error) {
      return { success: false, error };
    }

    const updatedTask = Task.updateTask(userId, taskId, {
      title,
      description,
    });

    if (!updatedTask) {
      return { success: false, error: 'Tarea no encontrada' };
    }

    return { success: true, task: updatedTask };
  }

  // Eliminar tarea
  static deleteTask(userId, taskId) {
    Task.deleteTask(userId, taskId);
    return { success: true };
  }

  // Guardar todas las tareas
  static saveTasks(userId, tasks) {
    Task.saveAllTasks(userId, tasks);
    return { success: true };
  }
}

export default TaskController;
