import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, filter, sort, onEdit, onDelete, onComplete, onFilterChange, onSortChange }) => {
  const handleComplete = (taskId, isCompleted) => {
    onComplete(taskId, isCompleted);
  };

  const handleHeaderClick = (header) => {
    if (header === 'status') {
      if (filter === 'all') {
        onFilterChange('completed');
      } else if (filter === 'completed') {
        onFilterChange('notCompleted');
      } else {
        onFilterChange('all');
      }
    } else if (header === 'priority') {
      if (sort === 'desc') {
        onSortChange('asc');
      } else {
        onSortChange('desc');
      }
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'notCompleted') {
      return !task.completed;
    } else {
      return true;
    }
  });

  const priorityOrder = {
    high: 1,
    medium: 2,
    low: 3
  };

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === 'asc') {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    } else if (sort === 'desc') {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    } else {
      return 0;
    }
  });
  console.log(tasks)
  return (
    <div>
      <table className="task-list">
        {tasks.length >0 && <thead>
          <tr>
            <th className='task-name-header'>Task</th>
            <th onClick={() => handleHeaderClick('priority')} style={{ cursor: 'pointer' }}>
              Priority {sort === 'desc' ? '↓' : sort === 'asc' ? '↑' : ''}
            </th>
            <th onClick={() => handleHeaderClick('status')} style={{ cursor: 'pointer' }}>
              Status {filter === 'completed' ? 'completed ↓' : filter === 'notCompleted' ? 'incompleted ↑' : ''}
            </th>
            <th>Actions</th>
          </tr>
        </thead>}
        <tbody>
          {sortedTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onComplete={handleComplete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;

