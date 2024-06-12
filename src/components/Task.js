import React, {useState} from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Task = ({ task, onEdit, onDelete, onComplete }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed || false);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
    onComplete(task.id, !isCompleted);
  };

  return (
    <tr className="task">
      <td> <div className="task-content">
        <h3>{task.title}</h3>
      </div></td>
      <td><div className={`priority-tag ${task.priority}`}>{task.priority}</div></td>
      <td>
      
        <div className="status">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleComplete}
          />
        </div>
      </td>
      <td>
        <div className="task-actions">
        <FaEdit onClick={() => onEdit(task)} />
        <FaTrash onClick={() => onDelete(task.id)} />
        </div>
      </td>
    </tr>
  );
};

export default Task;
