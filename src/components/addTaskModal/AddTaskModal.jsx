import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';

export default function AddTaskModal({ onClose }) {
  const [priority, setPriority] = useState('Medium');

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* Header */}
        <div className="modal-header">
          <h2>Add Task</h2>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <div className="form">
          <div>
            <label>Task Name</label>
            <input type="text" placeholder="Task Name" />
          </div>

          <div>
            <label>Task Group</label>
            <select>
              <option>Design</option>
              <option>Development</option>
              <option>Testing</option>
            </select>
          </div>

          <div className="grid-2">
            <div>
              <label>Estimate</label>
              <input type="text" placeholder="Select duration" />
            </div>
            <div>
              <label>Dead Line</label>
              <div>
                <input type="date" />
                <Calendar size={18} />
              </div>
            </div>
          </div>

          <div>
            <label>Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div>
            <label>Assignee</label>
            <select>
              <option>Select Assignee</option>
              <option>Evan Yates</option>
              <option>Alice Smith</option>
            </select>
          </div>

          <div>
            <label>Description</label>
            <textarea placeholder="Add some description of the task"></textarea>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button>Save Task</button>
        </div>
      </div>
    </div>
  );
}
