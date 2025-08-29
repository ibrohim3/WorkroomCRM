import React, { useState } from 'react';
import { X, Calendar, Upload } from 'lucide-react';

export default function AddProjectModal({ onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [priority, setPriority] = useState('Medium');

  const images = [
    '/img1.png',
    '/img2.png',
    '/img3.png',
    '/img4.png',
    '/img5.png',
    '/img6.png',
    '/img7.png',
    '/img8.png',
    '/img9.png',
  ];

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* Header */}
        <div className="modal-header">
          <h2>Add Project</h2>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="form-grid">
          {/* Left */}
          <div className="form">
            <div>
              <label>Project Name</label>
              <input type="text" placeholder="Project Name" />
            </div>

            <div className="grid-2">
              <div>
                <label>Starts</label>
                <input type="date" />
                <Calendar size={18} />
              </div>
              <div>
                <label>Dead Line</label>
                <input type="date" />
                <Calendar size={18} />
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
              <label>Description</label>
              <textarea placeholder="Add some description of the project"></textarea>
            </div>
          </div>

          {/* Right */}
          <div>
            <h3>Select image</h3>
            <p>Select or upload an avatar for the project (jpg, png)</p>

            <div className="image-grid">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={selectedImage === img ? 'active' : ''}
                >
                  <img src={img} alt="avatar" />
                </button>
              ))}
            </div>

            <div className="upload-btns">
              <button>
                <Upload size={18} />
              </button>
              <button>
                <Upload size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button>Save Project</button>
        </div>
      </div>
    </div>
  );
}
