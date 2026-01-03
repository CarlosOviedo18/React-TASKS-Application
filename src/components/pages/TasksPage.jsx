import TaskForm from '../TaskForm';
import TaskList from '../TaskList';

function TasksPage({ tasks, editingTask, onSubmit, onEdit, onDelete, onCancel, onToggleComplete }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <TaskForm 
        onSubmit={onSubmit}
        initialTask={editingTask}
        onCancel={editingTask ? onCancel : null}
      />
      <TaskList 
        tasks={tasks}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggleComplete={onToggleComplete}
      />
    </div>
  );
}

export default TasksPage;
