import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onEdit, onDelete, onComplete }) => {
  const handleComplete = (taskId, isCompleted) => {
    onComplete(taskId, isCompleted);
  };

  return (
    <table className="task-list">
      <thead>
        <tr>
          
          <th className='task-name-header'>Task</th>
          <th>Priority</th>
          <th>Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} onComplete={handleComplete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;

