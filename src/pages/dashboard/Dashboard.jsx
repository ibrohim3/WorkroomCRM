import React, { useState } from 'react';
import Avatar from 'react-avatar';
import './Dashboard.css';

const Dashboard = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);

  const workloadData = Array.from({ length: 20 }, (_, i) => ({
    name: `Person ${i + 1}`,
    role: i % 3 === 0 ? 'UI/UX Designer' : i % 3 === 1 ? 'Copywriter' : 'IOS Developer',
    level: i % 2 === 0 ? 'Senior' : 'Middle',
  }));

  const activityData = Array.from({ length: 20 }, (_, i) => ({
    name: `User ${i + 1}`,
    role: i % 2 === 0 ? 'UI/UX Designer' : 'Copywriter',
    action: i % 3 === 0 ? 'Updated the status of task' : 'Attached files to task',
  }));

  const projectsData = [
    {
      id: 'PN0001265',
      name: 'Medical App (iOS native)',
      created: 'Sep 12, 2020',
      priority: 'Medium',
      allTasks: 34,
      activeTasks: 13,
      assignees: ['Alice', 'Bob', 'Charlie', 'David', 'Eva'],
    },
    {
      id: 'PN0001221',
      name: 'Food Delivery Service',
      created: 'Sep 10, 2020',
      priority: 'Medium',
      allTasks: 50,
      activeTasks: 24,
      assignees: ['Mike', 'Anna', 'John'],
    },
    {
      id: 'PN0001290',
      name: 'Food Delivery Service',
      created: 'May 28, 2020',
      priority: 'Low',
      allTasks: 23,
      activeTasks: 20,
      assignees: ['Sophie', 'Tom', 'Liam', 'Emma', 'Olivia', 'Noah', 'Ava'],
    },
  ];

  const eventsData = [
    { title: "Presentation of the new department", time: "Today | 6:00 PM", duration: "4h" },
    { title: "Anna’s Birthday", time: "Today | 5:00 PM", duration: "2h" },
    { title: "Ray’s Birthday", time: "Tomorrow | 2:00 PM", duration: "1h 30m" },
    { title: "Meeting with Development Team", time: "Tomorrow | 5:00 PM", duration: "4h" },
    { title: "Meeting with CEO", time: "Sep 14 | 5:00 PM", duration: "1h" },
    { title: "Movie night (Tenet)", time: "Sep 15 | 5:00 PM", duration: "3h" },
    { title: "Lucas’s Birthday", time: "Sep 29 | 5:30 PM", duration: "2h" },
    { title: "Meeting with CTO", time: "Sep 30 | 12:00", duration: "1h" },
  ];

  // DASHBOARD VIEW
  const renderDashboard = () => (
    <div className="dashboard-container">
      <div className='dashboard'>
        <div className='dashboard-text'>
          <p>Welcome back, Evan!</p>
          <h2>Dashboard</h2>
        </div>
        <div>
          <p>📅 Created Sep 12, 2020</p>
        </div>
      </div>
      <div className="grid-layout">

        {/* Workload Section */}
        <div className="workload-section section">
          <div className="section-header">
            <h3>Workload</h3>
            <div className="header-buttons">
              <button onClick={() => setActiveView('workload')}>View all</button>
            </div>
          </div>
          <div className="workload-grid">
            {workloadData.slice(0, 8).map((person, idx) => (
              <div key={idx} className="person-card">
                <Avatar name={person.name} size="50" round />
                <div className="person-info">
                  <div>
                  <p>{person.name}</p>
                  </div>
                  <div className='person-btn'>
                  <span>{person.role}</span>
                  <button className='person-btns'>{person.level}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <div className="events-section section">
          <div className="section-header">
            <h3>Nearest Events</h3>
            <div className="header-buttons">
              <button onClick={() => setActiveView('events')}>View all</button>
            </div>
          </div>
          <div className="events-preview">
            <div className='kl'>
            {eventsData.slice(0, 3).map((event, idx) => (
              <div key={idx} className="event-card">
                <p>{event.title}</p>
                <div className='lk'>
                <span>{event.time}</span>
                <small>{event.duration}</small>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="projects-section section">
          <div className="section-header">
            <h3>Projects</h3>
            <div className="header-buttons">
              <button onClick={() => setActiveView('projects')}>View all</button>
            </div>
          </div>
          <div className="project-list">
            {projectsData.slice(0, 2).map((project, idx) => (
              <div key={idx} className="project-card-v2">
                <div>
                  <div className='project-ids'>
                  <div>
                    <img src="/Image (8).png" alt="" />
                  </div>
                  <div>
                  <div className="project-id">{project.id}</div>
                  <h4 className="project-title">{project.name}</h4>
                  </div>
                  </div>
                  <div className="project-header">
                    <p className="created-date">📅 Created {project.created}</p>
                    <div className={`priority-badge ${project.priority.toLowerCase()}`}>{project.priority}</div>
                  </div>
                </div>
                <div className="project-data">
                  <div>
                    <p>Project Data</p>
                  </div>
                  <div className='all-tasks'>
                  <div>
                    <p className="label">All tasks</p>
                    <p className="number">{project.allTasks}</p>
                  </div>
                  <div>
                    <p className="label">Active tasks</p>
                    <p className="number">{project.activeTasks}</p>
                  </div>
                  <div>
                    <p className="label">Assignees</p>
                    <div className="avatars">
                      {project.assignees.slice(0, 3).map((person, idx) => (
                        <Avatar key={idx} name={person} size="30" round />
                      ))}
                      {project.assignees.length > 3 && (
                        <div className="extra-count">+{project.assignees.length - 3}</div>
                      )}
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

  {/* Activity Stream */}
      <div className="activity-section section">
        <div className="section-header">
          <h3>Activity Stream</h3>
          <div className="header-buttons">
            <button onClick={() => setActiveView('activity')}>View all</button>
          </div>
        </div>

        {/* ActivityStream bo'limi */}
        <div className="activity-list">
          {activityData.slice(0, 4).map((activity, idx) => (
            <div key={idx} className="activity-item">
              <Avatar name={activity.name} size="35" round />
              <div>
                <p>{activity.name} ({activity.role})</p>
                <small>{activity.action}</small>
              </div>
            </div>
          ))}
        </div>
      </div>  


      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>&times;</button>
            {activeView === 'projects' ? (
              <>
                <h2>Add Project</h2>
                <label>Project Name</label>
                <input type="text" placeholder="Enter project name" />
                <label>Priority</label>
                <select defaultValue="medium">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <label>Assignees</label>
                <textarea placeholder="Add assignees separated by commas"></textarea>
                <button onClick={() => alert('Project added!')}>Add</button>
              </>
            ) : (
              <>
                <h2>Add Event</h2>
                <label>Event Title</label>
                <input type="text" placeholder="Enter event title" />
                <label>Time</label>
                <input type="text" placeholder="Enter time" />
                <label>Duration</label>
                <input type="text" placeholder="Enter duration" />
                <button onClick={() => alert('Event added!')}>Add</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );

  // VIEWS bolimi

  const renderProjectsView = () => (
    <div className="fullscreen-view">
      <div className='view-btn'>
        <div className="fullscreen-header">
        <button className="back-btn" onClick={() => setActiveView('dashboard')}>← Back</button>
        <h2>Projects</h2>
        </div>
      <div >
        <button className="add-event-btn top-btn" onClick={() => setShowModal(true)}>+ Add Project</button>
      </div>
      </div>
      <div className="project-list-full">
        {projectsData.map((project, idx) => (
          <div key={idx} className="project-card-v2">
            <div>
              <div className='project-ids'>
              <div>
                <img src="/Image (8).png" alt="" />
              </div>
              <div>
              <div className="project-id">{project.id}</div>
              <h4 className="project-title">{project.name}</h4>
              </div>
              </div>
              <div className="project-header">
                <p className="created-date">📅 Created {project.created}</p>
                <div className={`priority-badge ${project.priority.toLowerCase()}`}>{project.priority}</div>
              </div>
            </div>
            <div className="project-data">
              <div><p>Project Data</p></div>
              <div className='all-tasks'>
              <div><p className="label">All tasks</p><p className="number">{project.allTasks}</p></div>
              <div><p className="label">Active tasks</p><p className="number">{project.activeTasks}</p></div>
                <div>
                  <p className="label">Assignees</p>
                  <div className="avatars">
                  {project.assignees.slice(0, 3).map((person, idx) => (
                    <Avatar key={idx} name={person} size="30" round />
                  ))}
                  {project.assignees.length > 3 && (
                    <div className="extra-count">+{project.assignees.length - 3}</div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*  project add */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>&times;</button>
            <h2>Add Project</h2>
            <label>Project Name</label>
            <input type="text" placeholder="Enter project name" />
            <label>Priority</label>
            <select defaultValue="medium">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <label>Assignees</label>
            <textarea placeholder="Add assignees separated by commas"></textarea>
            <button onClick={() => alert('Project added!')}>Add</button>
          </div>
        </div>
      )}
    </div>
  );

  const renderWorkloadView = () => (
    <div className="fullscreen-view">
      <div className="fullscreen-header">
        <button className="back-btn" onClick={() => setActiveView('dashboard')}>← Back</button>
        <h2>Workload</h2>
        <button className="add-event-btn top-btn" onClick={() => setShowModal(true)}>+ Add Event</button>
      </div>
      <div className="workload-grid-full">
        {workloadData.map((person, idx) => (
          <div key={idx} className="person-card">
            <Avatar name={person.name} size="50" round />
            <div className="person-info">
              <p>{person.name}</p>
              <span>{person.role}</span>
              <small>{person.level}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEventsView = () => (
    <div className="fullscreen-view">
      <div className="fullscreen-header">
        <button className="back-btn" onClick={() => setActiveView('dashboard')}>← Back</button>
        <h2>Events</h2>
        <button className="add-event-btn top-btn" onClick={() => setShowModal(true)}>+ Add Event</button>
      </div>
      <div className="event-full-list">
        {eventsData.map((event, idx) => (
          <div key={idx} className="event-card">
            <p>{event.title}</p>
            <span>{event.time}</span>
            <small>{event.duration}</small>
          </div>
        ))}
      </div>
    </div>
  );

  const renderActivityView = () => (
    <div className="fullscreen-view">
      <div className="fullscreen-header">
        <button className="back-btn" onClick={() => setActiveView('dashboard')}>← Back</button>
        <h2>Activity Stream</h2>
        <button className="add-event-btn top-btn" onClick={() => setShowModal(true)}>+ Add Event</button>
      </div>
      <div className="activity-grid-full">
        {activityData.map((activity, idx) => (
          <div key={idx} className="activity-item">
            <Avatar name={activity.name} size="35" round />
            <div>
              <p>{activity.name} ({activity.role})</p>
              <small>{activity.action}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
    <div className='container'>
      {activeView === 'dashboard' && renderDashboard()}
      {activeView === 'projects' && renderProjectsView()}
      {activeView === 'workload' && renderWorkloadView()}
      {activeView === 'events' && renderEventsView()}
      {activeView === 'activity' && renderActivityView()}

      {/* input va boshqalari */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>&times;</button>
            {activeView === '' ? (
              <>
                <h2>Add Project</h2>
                <label>Project Name</label>
                <input type="text" placeholder="Enter project name" />
                <label>Priority</label>
                <select defaultValue="medium">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <label>Assignees</label>
                <textarea placeholder="Add assignees separated by commas"></textarea>
                <button onClick={() => alert('Project added!')}>Add</button>
              </>
            ) : (
              <>
                <h2>Need some Help?</h2>
                <img src="/illustration (1).png" alt="" />
                <p className='input-text'>Describe your question and our specialists will answer you within 24 hours.</p>
                <label className='input-lable'>Request Subject</label>
                <select className='input-select'>
                  <option>Technical difficulties</option>
                  <option>Billing issue</option>
                  <option>Feature request</option>
                </select>
                <label className='input-lable'>Duration</label>
                <textarea className='input-add' placeholder="Add some description of the request"></textarea>
                <button className='input-btn' onClick={() => alert('Event added!')}>Send Request</button>
              </>
            )}
          </div>
        </div>
        
      )}
      </div>
    </>
  );
};
export default Dashboard;
