import { useState } from 'react';
import AuthController from '../controllers/authController';

function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors('');

    let result;

    if (isLogin) {
      result = AuthController.login(email, password);
    } else {
      result = AuthController.register(username, email, password);
    }

    if (result.success) {
      onLogin(result.user);
    } else {
      setErrors(result.error);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setErrors('');
    setEmail('');
    setPassword('');
    setUsername('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">TaskApp</h1>
          <p className="text-base sm:text-lg text-slate-600 font-semibold">
            {isLogin ? 'Inicia sesión' : 'Crea tu cuenta'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {!isLogin && (
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-slate-700 mb-2">Nombre de usuario</label>
              <input
                id="username"
                type="text"
                placeholder="Tu nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-slate-50 text-sm sm:text-base"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-slate-50 text-sm sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-slate-50 text-sm sm:text-base"
            />
          </div>

          {errors && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 font-medium text-sm">{errors}</p>
            </div>
          )}

          <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base">
            {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-200 text-center">
          <p className="text-slate-600 text-sm mb-3">
            {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
          </p>
          <button 
            type="button" 
            onClick={toggleMode} 
            className="text-indigo-600 font-semibold hover:text-indigo-700 text-sm transition-colors"
          >
            {isLogin ? 'Regístrate aquí' : 'Inicia sesión aquí'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
