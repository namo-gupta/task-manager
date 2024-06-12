import React, { useState } from 'react';

const EditTaskModal = ({ task, onSave, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);

  const handleSave = () => {
    onSave({ ...task, title, description, priority });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form>
        <div className='header-content' style={{color: 'white',fontSize: '20px',fontWeight: '700'}}>Edit Task Form</div>
          <div>
            <label for="title">Task Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              name="title"
              required
            />
          </div>
          <div>
          <label>Task Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
            ></textarea></div>
             <div>
                <label>Task Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  required
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className='btn'>
              <button onClick={onClose} className='add-task-btn'>Cancel</button>
          <button onClick={handleSave} className='add-task-btn'>Save</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default EditTaskModal;
