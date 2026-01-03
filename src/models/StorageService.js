// Servicio de almacenamiento con localStorage
class StorageService {
  // Usuarios
  static getAllUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
  }

  static saveUser(user) {
    const users = this.getAllUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  static getUserByEmail(email) {
    const users = this.getAllUsers();
    return users.find(u => u.email === email);
  }

  static setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  static getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  static clearCurrentUser() {
    localStorage.removeItem('currentUser');
  }

  // Tareas
  static getUserTasks(userId) {
    const tasks = localStorage.getItem(`tasks_${userId}`);
    return tasks ? JSON.parse(tasks) : [];
  }

  static saveTasks(userId, tasks) {
    localStorage.setItem(`tasks_${userId}`, JSON.stringify(tasks));
  }

  static clearAllData() {
    localStorage.clear();
  }
}

export default StorageService;
