import React, { useState } from "react";
import Avatar from "react-avatar";
import "./Employees.css";
import { useNavigate } from "react-router-dom";

const AddEmployeeModal = ({ onClose }) => {
  return (
    <div className="employees-overlay">
      <div className="employees">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Add Employee</h2>
        <div className="modal-content">
          <img
            src="illustration (2).png"
            alt="Illustration"
            className="illustration"
          />
          <p>Member’s Email</p>
          <input
            type="email"
            placeholder="memberemail@gmail.com"
            className="email-input"
          />
          <a href="#">+ Add another Member</a>
          <button className="approve-btn">Approve</button>
        </div>
      </div>
    </div>
  );
};

const Employees = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedEmployee(null);
  };

  const handleCardClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const employeesList = [
    {
      name: "Evan Yates",
      email: "evanyates@gmail.com",
      gender: "Male",
      birthday: "Apr 12, 1995",
      age: 25,
      position: "UI/UX Designer",
      level: "Middle",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@gmail.com",
      gender: "Female",
      birthday: "Jun 5, 1992",
      age: 28,
      position: "Frontend Developer",
      level: "Senior",
    },
    {
      name: "Bob Smith",
      email: "bobsmith@gmail.com",
      gender: "Male",
      birthday: "Jan 20, 1990",
      age: 33,
      position: "Backend Developer",
      level: "Middle",
    },
    {
      name: "Clara Davis",
      email: "clara.davis@gmail.com",
      gender: "Female",
      birthday: "Oct 15, 1993",
      age: 29,
      position: "Product Manager",
      level: "Senior",
    },
    {
      name: "David Lee",
      email: "david.lee@gmail.com",
      gender: "Male",
      birthday: "Dec 2, 1988",
      age: 34,
      position: "DevOps Engineer",
      level: "Middle",
    },
    {
      name: "Eva Green",
      email: "eva.green@gmail.com",
      gender: "Female",
      birthday: "Mar 8, 1994",
      age: 30,
      position: "QA Engineer",
      level: "Junior",
    },
    {
      name: "Frank Miller",
      email: "frank.miller@gmail.com",
      gender: "Male",
      birthday: "Jul 19, 1991",
      age: 32,
      position: "UI Designer",
      level: "Middle",
    },
    {
      name: "Grace Wilson",
      email: "grace.wilson@gmail.com",
      gender: "Female",
      birthday: "Nov 30, 1990",
      age: 33,
      position: "Business Analyst",
      level: "Senior",
    },
  ];

  const exampleEmployee = {
    name: "Allen Perkins",
    position: "UI/UX Designer",
    company: "Cadabra",
    location: "NYC, New York, USA",
    email: "evanyates@gmail.com",
    birthday: "May 19, 1996",
    projects: [
      {
        name: "Medical App (iOS native)",
        tasks: 34,
        active: 13,
        priority: "Medium",
      },
      {
        name: "Food Delivery Service",
        tasks: 50,
        active: 24,
        priority: "Medium",
      },
      { name: "Internal Project", tasks: 23, active: 20, priority: "Low" },
    ],
  };

  return (
    <div className="employees-container">
      {!selectedEmployee ? (
        <>
          <div className="employees-headers">
            <h2>Employees</h2>
            <div className="tabs">
              <button
                id="tabs-list"
                className={activeTab === "list" ? "active" : ""}
                onClick={() => handleTabChange("list")}
              >
                List
              </button>
              <button
                id="tabs-activity"
                className={activeTab === "activity" ? "active" : ""}
                onClick={() => handleTabChange("activity")}
              >
                Activity
              </button>
            </div>
            <button className="add-btn" onClick={() => setIsModalOpen(true)}>
              + Add Employee
            </button>
          </div>

          {isModalOpen && (
            <AddEmployeeModal onClose={() => setIsModalOpen(false)} />
          )}

          {activeTab === "list" ? (
            <div className="list-view">
              {employeesList.map((emp, idx) => (
                <div className="employee-row" key={idx}>
                  <div className="list-avatar">
                    <Avatar name={emp.name} size="50" round={true} />
                    <div>
                      <h4>{emp.name}</h4>
                      <p>{emp.email}</p>
                    </div>
                  </div>
                  <div className="employee-text">
                    <span>Gender</span>
                    <p className={emp.gender.toLowerCase()}>{emp.gender}</p>
                  </div>
                  <div className="employee-text">
                    <span>Birthday</span>
                    <p>{emp.birthday}</p>
                  </div>
                  <div className="employee-text">
                    <span>Full Age</span>
                    <p>{emp.age}</p>
                  </div>
                  <div className="employee-text">
                    <span>Position</span>
                    <p>
                      {emp.position} <span className="tag">{emp.level}</span>
                    </p>
                  </div>
                  <div className="menu">•••</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="activity-view">
              {employeesList.map((emp, idx) => (
                <div
                  className="activity-card"
                  key={idx}
                  onClick={() => handleCardClick(exampleEmployee)}
                >
                  <Avatar name={emp.name} size="50" round={true} />
                  <h4>{emp.name}</h4>
                  <p>{emp.position}</p>
                  <span className="tag">{emp.level}</span>
                  <div className="task-info">
                    <div>
                      <p>0</p>
                      <span>
                        Backlog <br /> tasks
                      </span>
                    </div>
                    <div>
                      <p>16</p>
                      <span>
                        Tasks <br /> In Progress
                      </span>
                    </div>
                    <div>
                      <p>6</p>
                      <span>
                        Tasks <br /> In Review
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="profile-view">
          <div>
            {/* ✅ O'ZGARTIRILGAN QATOR: */}
            <button
              className="back-btn"
              onClick={() => setSelectedEmployee(null)}
            >
              ← Back
            </button>
            <h2>Employee’s Profile</h2>
          </div>
          <div className="nm">
            <div>
              <div className="profile-header">
                <div>
                  <Avatar name={selectedEmployee.name} size="80" round={true} />
                  <h2>{selectedEmployee.name}</h2>
                  <p>{selectedEmployee.position}</p>
                </div>
              </div>

              <div className="profile-form">
                <h3>Main info</h3>

                <div className="profile-input">
                  <label>Position</label>
                  <input type="text" placeholder="UI/UX Designer" />
                </div>

                <div className="profile-input">
                  <label>Company</label>
                  <input type="text" placeholder="Cadabra" />
                </div>

                <div className="profile-input">
                  <label>Location</label>
                  <input type="text" placeholder="NYC, New York, USA" />
                </div>

                <div className="profile-input">
                  <label>Birthday Date</label>
                  <input type="date" />
                </div>

                <h3>Contact Info</h3>

                <div className="profile-input">
                  <label>Email</label>
                  <input type="email" placeholder="evanyates@gmail.com" />
                </div>

                <div className="profile-input">
                  <label>Mobile Number</label>
                  <input type="tel" placeholder="+1 675 346 23-10" />
                </div>

                <div className="profile-input">
                  <label>Skype</label>
                  <input type="text" placeholder="Evan 2256" />
                </div>
              </div>
            </div>

            <div className="projects-section section">
              <div className="project-inputs">
                <div className="project-btn">
                  <button className="project-btn">Projects</button>
                  <button>Team</button>
                  <button>My vacations</button>
                </div>
                <div>
                  <div className="project-select-wrapper">
                    <select id="projectSelect" className="project-select">
                      <option value="current">Current Projects</option>
                      <option value="completed">Completed Projects</option>
                      <option value="archived">Archived Projects</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="section-header"></div>
              <div className="project-list-full">
                {selectedEmployee.projects.map((project, idx) => (
                  <div key={idx} className="project-card-v2">
                    <div>
                      <div className="project-ids">
                        <div>
                          <img src="/Image (9).png" alt="icon" />
                        </div>
                        <div>
                          <div className="project-id">
                            {project.name.slice(0, 3).toUpperCase()}
                          </div>
                          <h4 className="project-title">{project.name}</h4>
                        </div>
                      </div>
                      <div className="project-header">
                        <p className="created-date">📅 Created N/A</p>
                        <div
                          className={`priority-badge ${project.priority.toLowerCase()}`}
                        >
                          {project.priority}
                        </div>
                      </div>
                    </div>
                    <div className="project-data">
                      <div>
                        <p>Project Data</p>
                      </div>
                      <div className="all-tasks">
                        <div>
                          <p className="label">All tasks</p>
                          <p className="number">{project.tasks}</p>
                        </div>
                        <div>
                          <p className="label">Active tasks</p>
                          <p className="number">{project.active}</p>
                        </div>
                        <div>
                          <p className="label">Assignees</p>
                          <div className="avatars">
                            <Avatar name="Evan Yates" size="30" round />
                            <Avatar name="Alice Johnson" size="30" round />
                            <Avatar name="Bob Smith" size="30" round />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;
