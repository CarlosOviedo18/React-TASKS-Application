function TaskList({ tasks, onEdit, onDelete, onToggleComplete }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 sm:py-16 bg-slate-50 rounded-xl max-w-2xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-600 mb-2">No hay tareas aún</h3>
        <p className="text-sm sm:text-base text-slate-500">Crea tu primera tarea para comenzar a organizar tu día</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
      {tasks.map((task) => (
        <div key={task.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 break-words">{task.title}</h3>
          <p className="text-slate-600 text-xs sm:text-sm mb-4 line-clamp-3">
            {task.description || 'Sin descripción'}
          </p>
          <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
            <button 
              onClick={() => onEdit(task)}
              className="flex-1 px-3 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-200 text-xs sm:text-sm"
            >
              Editar
            </button>
            {onToggleComplete && (
              <button 
                onClick={() => onToggleComplete(task.id)}
                className="flex-1 px-3 py-2 bg-slate-200 text-slate-900 font-semibold rounded-lg hover:bg-slate-300 transition-all duration-200 text-xs sm:text-sm"
              >
                {task.completed ? 'Deshacer' : 'Completar'}
              </button>
            )}
            <button 
              onClick={() => onDelete(task.id)}
              className="flex-1 px-3 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-200 text-xs sm:text-sm"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
