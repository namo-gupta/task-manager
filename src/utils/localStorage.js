export const loadTasks = () => {
    const tasks = localStorage.getItem('tasks');
    console.log('Loaded tasks:', tasks);
    return tasks ? JSON.parse(tasks) : [];
  };
  
  export const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  