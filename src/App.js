import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import EditTaskModal from './components/EditTaskModal';
import { loadTasks, saveTasks } from './utils/localStorage';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(loadTasks());
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const saveTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null);
  };

  const completeTask = (taskId, isCompleted) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: isCompleted } : task
      )
    );
  };

  return (
    <div className="app">
      <header>
        <div className='header-content'>
          <span className='app-name'>Task Manager</span>
          <TaskForm onAdd={addTask} />
        </div>
      </header>
      {/* <h1>Todo App</h1> */}
      {/* <TaskForm onAdd={addTask} /> */}
      <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={deleteTask} onComplete={completeTask}/>
      {editingTask && (
        <EditTaskModal task={editingTask} onSave={saveTask} onClose={() => setEditingTask(null)} />
      )}
    </div>
  );
};

export default App;

