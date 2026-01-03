import React from 'react';

function Menu({ currentPage, onNavigate, user, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl sm:text-2xl font-bold text-indigo-600">TaskApp</h1>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 hover:bg-slate-100 rounded-lg transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`font-medium transition-colors text-sm lg:text-base ${
                currentPage === 'home' 
                  ? 'text-indigo-600' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Inicio
            </button>
            
            <button 
              onClick={() => onNavigate('tareas')}
              className={`font-medium transition-colors text-sm lg:text-base ${
                currentPage === 'tareas' 
                  ? 'text-indigo-600' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mis Tareas
            </button>

            <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
              <span className="text-slate-700 font-medium text-sm lg:text-base hidden md:inline">{user?.username}</span>
              <button 
                onClick={onLogout} 
                className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors text-sm"
              >
                Salir
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden pb-4 space-y-3">
            <button 
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition ${
                currentPage === 'home' 
                  ? 'bg-indigo-100 text-indigo-600' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Inicio
            </button>
            
            <button 
              onClick={() => {
                onNavigate('tareas');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition ${
                currentPage === 'tareas' 
                  ? 'bg-indigo-100 text-indigo-600' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Mis Tareas
            </button>

            <div className="px-4 py-2 border-t border-slate-200">
              <p className="text-slate-700 font-medium mb-3">{user?.username}</p>
              <button 
                onClick={() => {
                  onLogout();
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
              >
                Salir
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Menu;
