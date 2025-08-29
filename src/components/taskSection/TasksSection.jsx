import React from "react";

export default function TasksSection({ onAddTask }) {
  return (
    <div className="tasks-section">
      <img src="/empty-tasks.png" alt="no tasks" />
      <p className="title">There are no tasks in this project yet</p>
      <p className="subtitle">Let's add them</p>
      <button onClick={onAddTask}>+ Add Task</button>
    </div>
  );
}