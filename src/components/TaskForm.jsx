import {useState} from "react";

function TaskForm({ onSubmit, initialTask = null, onCancel = null }) {
  const [title, setTitle] = useState(initialTask?.title || '');
  const [description, setDescription] = useState(initialTask?.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert('Por favor, ingresa un título para la tarea');
      return;
    }

    const newTask = {
      id: initialTask?.id || Date.now(),
      title: title.trim(),
      description: description.trim(),
    };

    onSubmit(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 sm:p-8 max-w-2xl mx-auto mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
        {initialTask ? 'Editar Tarea' : 'Crear Nueva Tarea'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-2">Título *</label>
          <input
            id="title"
            type="text"
            placeholder="Escribe el título de tu tarea"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-slate-50 text-sm sm:text-base"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-slate-700 mb-2">Descripción</label>
          <textarea
            id="description"
            placeholder="Escribe una descripción (opcional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-slate-50 resize-none text-sm sm:text-base"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button type="submit" className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base">
            {initialTask ? 'Actualizar' : 'Crear Tarea'}
          </button>
          {onCancel && (
            <button type="button" onClick={onCancel} className="flex-1 px-6 py-3 bg-slate-200 text-slate-900 font-semibold rounded-lg hover:bg-slate-300 transition-all duration-200 text-sm sm:text-base">
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
