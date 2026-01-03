import StorageService from './StorageService';

class User {
  constructor(username, email, password) {
    this.id = Date.now();
    this.username = username;
    this.email = email;
    this.password = password;
    this.createdAt = new Date();
  }

  // Validar datos del usuario
  static validate(username, email, password, isRegistering = false) {
    const errors = [];

    if (isRegistering && !username?.trim()) {
      errors.push('El nombre de usuario es requerido');
    }

    if (!email?.trim()) {
      errors.push('El email es requerido');
    } else if (!this.isValidEmail(email)) {
      errors.push('Email inválido');
    }

    if (!password?.trim()) {
      errors.push('La contraseña es requerida');
    } else if (password.length < 6) {
      errors.push('La contraseña debe tener al menos 6 caracteres');
    }

    return errors;
  }

  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Crear y guardar nuevo usuario
  static create(username, email, password) {
    const newUser = new User(username, email, password);
    StorageService.saveUser(newUser);
    return newUser;
  }

  // Buscar usuario por email y contraseña
  static authenticate(email, password) {
    const user = StorageService.getUserByEmail(email);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  // Verificar si el email ya existe
  static emailExists(email) {
    return StorageService.getUserByEmail(email) !== undefined;
  }
}

export default User;
