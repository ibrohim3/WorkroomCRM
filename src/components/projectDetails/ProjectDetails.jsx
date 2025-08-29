import React from 'react';

export default function ProjectDetails() {
  return (
    <div className="project-details">
      <p className="label">Project Number</p>
      <h3>PN0001245</h3>

      <p className="label">Description</p>
      <p>
        App for maintaining your medical record, making appointments with a
        doctor, storing prescriptions
      </p>

      <p className="label">Reporter</p>
      <p>Evan Yates</p>

      <p className="label">Assignees</p>
      <div className="avatars">
        <img src="/avatar1.png" alt="avatar1" />
        <img src="/avatar2.png" alt="avatar2" />
        <img src="/avatar3.png" alt="avatar3" />
      </div>

      <p className="label">Priority</p>
      <p className="priority">Medium</p>

      <p className="label">Dead Line</p>
      <p>Feb 23, 2020</p>

      <p className="label">Created</p>
      <p>May 28, 2020</p>
    </div>
  );
}
