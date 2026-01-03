function HomePage({ user, onNavigate }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
          Mi Gestor de Tareas
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
          Hola <span className="font-semibold text-indigo-600">{user.username}</span>! 
          Organiza y gestiona todas tus tareas en un solo lugar
        </p>
      </div>

      <div className="flex justify-center mb-16 sm:mb-20">
        <button 
          onClick={() => onNavigate('tareas')}
          className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-base sm:text-lg"
        >
          Ir a Mis Tareas
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 sm:p-8 text-center">
          <div className="text-slate-400 text-4xl mb-4">📋</div>
          <h3 className="font-semibold text-slate-900 mb-2 text-lg">Crea Tareas</h3>
          <p className="text-slate-600 text-sm sm:text-base">Organiza todo lo que necesitas hacer de manera eficiente</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 sm:p-8 text-center">
          <div className="text-slate-400 text-4xl mb-4">✏️</div>
          <h3 className="font-semibold text-slate-900 mb-2 text-lg">Edita Fácilmente</h3>
          <p className="text-slate-600 text-sm sm:text-base">Modifica tus tareas en cualquier momento según sea necesario</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 sm:p-8 text-center">
          <div className="text-slate-400 text-4xl mb-4">✓</div>
          <h3 className="font-semibold text-slate-900 mb-2 text-lg">Completa</h3>
          <p className="text-slate-600 text-sm sm:text-base">Marca tus logros y celebra tus avances</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
