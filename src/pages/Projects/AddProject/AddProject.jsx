// import React, { useState } from 'react';
// import './AddProject.css';

// function AddProject() {
//   const [projectName, setProjectName] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [priority, setPriority] = useState('Medium');
//   const [description, setDescription] = useState('');
//   const [selectedImage, setSelectedImage] = useState('');

//   return (
//     <div className="container">
//       <div className="modal">
//         <h2>Add Project</h2>
//         <form>
//           <div className="input-group">
//             <label>Project Name</label>
//             <input
//               type="text"
//               placeholder="Project Name"
//               value={projectName}
//               onChange={(e) => setProjectName(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
//             <label>Starts</label>
//             <input
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
//             <label>Dead Line</label>
//             <input
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
//             <label>Priority</label>
//             <select
//               value={priority}
//               onChange={(e) => setPriority(e.target.value)}
//             >
//               <option value="Low">Low</option>
//               <option value="Medium">Medium</option>
//               <option value="High">High</option>
//             </select>
//           </div>
//           <div className="input-group">
//             <label>Description</label>
//             <textarea
//               placeholder="Add some description of the project"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>
//           <div className="input-group image-select">
//             <label>Select image</label>
//             <div className="image-options">
//               <div
//                 className={`image-option ${
//                   selectedImage === 'image1' ? 'selected' : ''
//                 }`}
//                 onClick={() => setSelectedImage('image1')}
//               >
//                 <img src="https://via.placeholder.com/40" alt="Image 1" />
//               </div>
//               <div
//                 className={`image-option ${
//                   selectedImage === 'image2' ? 'selected' : ''
//                 }`}
//                 onClick={() => setSelectedImage('image2')}
//               >
//                 <img src="https://via.placeholder.com/40" alt="Image 2" />
//               </div>
//               {/* Add more images if needed */}
//             </div>
//           </div>
//           <div className="input-group links">
//             <button type="button" className="link-btn">
//               🔗
//             </button>
//             <button type="button" className="link-btn">
//               📎
//             </button>
//           </div>
//           <button className="save-btn">Save Project</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddProject;
