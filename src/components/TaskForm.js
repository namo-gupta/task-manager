import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description, priority });
    setTitle('');
    setDescription('');
    setShowModal(false);
    setPriority('low');
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setShowModal(false);
    setPriority('low');
  };

  const handleAddClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button type="button" onClick={handleAddClick} className='add-task-btn'>
        Add Task
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className='header-content' style={{color: 'white',fontSize: '20px',fontWeight: '700'}}>Add Task Form</div>
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
              ></textarea>
              </div>
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
              <button type="button" onClick={handleCancel} className='add-task-btn'>
                Cancel
              </button>
              <button type="submit" className='add-task-btn'>Save</button>
              </div>
              
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskForm;




