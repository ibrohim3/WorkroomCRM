import React, { useState } from "react";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const [isTasksVisible, setTasksVisible] = useState(false); // To manage tasks visibility

  // Function to toggle task list visibility
  const toggleTasks = () => {
    setTasksVisible(!isTasksVisible);
  };

  return (
    <div className="project-details-container">
      {/* Left Section: Project Info */}
      <div className="project-details-left">
        <h2>Time tracker - personal account</h2>
        <p className="project-number">Project Number: PN0001245</p>
        <div className="project-info">
          <p>
            <strong>Description: </strong>
            All users on MySpace will know that there are millions of people out there. Every day besides so many people joining this community, there are also a lot of users leaving the platform.
          </p>
          <p>
            <strong>Reporter: </strong>Evan Yates
          </p>
          <p>
            <strong>Priority: </strong>Medium
          </p>
          <p>
            <strong>Deadline: </strong>Feb 23, 2020
          </p>
          <p>
            <strong>Created: </strong>May 28, 2020
          </p>
        </div>
      </div>

      {/* Right Section: Tasks Info */}
      <div className="project-details-right">
        {/* Tasks Header */}
        <div className="tasks-header">
          <h3>Tasks</h3>
          <div className="task-icons">
            <button className="icon-button" onClick={toggleTasks}>☰</button>
            <button className="icon-button">📝</button>
            <button className="icon-button">🔍</button>
            <button className="icon-button">⚙️</button>
          </div>
        </div>

        {/* Task List - Conditionally Rendered */}
        {isTasksVisible && (
          <div className="task-list">
            <div className="task-item">
              <div className="task-info">
                <span className="task-name">Research</span>
                <span className="task-estimate">2d 4h</span>
                <span className="task-spent-time">1d 2h</span>
                <span className="task-assignee">Evan Yates</span>
                <span className="task-priority">Medium</span>
              </div>
            </div>
            {/* More tasks can be added here in a similar way */}
          </div>
        )}
        
        {/* Add Task button */}
        <button className="add-task-button">+ Add Task</button>
      </div>
    </div>
  );
};

export default ProjectDetails;