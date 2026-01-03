import StorageService from './StorageService';

class Task {
  constructor(title, description = '') {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.createdAt = new Date();
  }

  // Validar tarea
  static validate(title) {
    if (!title?.trim()) {
      return 'El título de la tarea es requerido';
    }
    return null;
  }

  // Crear nueva tarea
  static create(title, description = '') {
    return new Task(title, description);
  }

  // Obtener tareas del usuario
  static getUserTasks(userId) {
    return StorageService.getUserTasks(userId);
  }

  // Agregar tarea
  static addTask(userId, task) {
    const tasks = StorageService.getUserTasks(userId);
    tasks.push(task);
    StorageService.saveTasks(userId, tasks);
    return task;
  }

  // Actualizar tarea
  static updateTask(userId, taskId, updatedTask) {
    const tasks = StorageService.getUserTasks(userId);
    const index = tasks.findIndex(t => t.id === taskId);
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...updatedTask, id: taskId };
      StorageService.saveTasks(userId, tasks);
      return tasks[index];
    }
    return null;
  }

  // Eliminar tarea
  static deleteTask(userId, taskId) {
    const tasks = StorageService.getUserTasks(userId);
    const filtered = tasks.filter(t => t.id !== taskId);
    StorageService.saveTasks(userId, filtered);
    return true;
  }

  // Guardar todas las tareas
  static saveAllTasks(userId, tasks) {
    StorageService.saveTasks(userId, tasks);
  }
}

export default Task;
