import User from '../models/User';
import StorageService from '../models/StorageService';

class AuthController {
  // Registrar nuevo usuario
  static register(username, email, password) {
    // Validar datos
    const errors = User.validate(username, email, password, true);
    if (errors.length > 0) {
      return { success: false, error: errors[0] };
    }

    // Verificar si el email ya existe
    if (User.emailExists(email)) {
      return { success: false, error: 'Este email ya está registrado' };
    }

    // Crear usuario
    const newUser = User.create(username, email, password);
    StorageService.setCurrentUser(newUser);

    return { success: true, user: newUser };
  }

  // Iniciar sesión
  static login(email, password) {
    // Validar datos
    const errors = User.validate('', email, password, false);
    if (errors.length > 0) {
      return { success: false, error: errors[0] };
    }

    // Autenticar usuario
    const user = User.authenticate(email, password);
    if (!user) {
      return { success: false, error: 'Email o contraseña incorrectos' };
    }

    StorageService.setCurrentUser(user);
    return { success: true, user };
  }

  // Obtener usuario actual
  static getCurrentUser() {
    return StorageService.getCurrentUser();
  }

  // Cerrar sesión
  static logout() {
    StorageService.clearCurrentUser();
    return { success: true };
  }
}

export default AuthController;
