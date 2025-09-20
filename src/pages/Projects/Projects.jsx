import React from "react";
import "./Projects.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  AlignStartHorizontal,
  AlignStartVertical,
  Funnel,
} from "lucide-react";

import oval1 from "../../assets/icons/Oval1.svg";
import oval2 from "../../assets/icons/Oval2.svg";
import oval3 from "../../assets/icons/Oval3.svg";
import oval4 from "../../assets/icons/Oval4.svg";
import oval5 from "../../assets/icons/Oval5.svg";

function Projects() {
  const tasksTable = [
    {
      name: "Research",
      estimate: "2d 4h",
      time: "1d 2h",
      person: oval1,
      priority: "Medium",
      state: "Done",
    },
    {
      name: "Mind Map",
      estimate: "1d 2h",
      time: "4h 25m",
      person: oval2,
      priority: "Medium",
      state: "In Progress",
    },
    {
      name: "UX sketches",
      estimate: "4d",
      time: "2d 2h 20m",
      person: oval2,
      priority: "Low",
      state: "In Progress",
    },
    {
      name: "UX Login + Registration",
      estimate: "2d",
      time: "3h 15m",
      person: oval3,
      priority: "Low",
      state: "To Do",
    },
    {
      name: "UI Login + Registration",
      estimate: "1d 2h",
      time: "4h",
      person: oval1,
      priority: "Medium",
      state: "In Review",
    },
    {
      name: "UI for other screens",
      estimate: "4d",
      time: "2d 2h 20m",
      person: oval4,
      priority: "Low",
      state: "In Progress",
    },
  ];
  const backlogTable = [
    {
      name: "Animation for buttons",
      estimate: "6h",
      time: "0h",
      person: oval4,
      priority: "Medium",
      state: "Done",
    },
    {
      name: "Preloader",
      estimate: "2d",
      time: "0h",
      person: oval5,
      priority: "Low",
      state: "Done",
    },
    {
      name: "Freelancer",
      estimate: "2d 1h",
      time: "0h",
      person: oval2,
      priority: "Urgent",
      state: "Done",
    },
  ];
  const Navigate = useNavigate();
  const newPro = () => {
    Navigate("newProject");
  };
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(stored);
  }, []);

  const showProjectsList = () => {
    console.log(projects);
  };

  const [selectedIndex, setSelectedIndex] = useState(null);

  const idNember = "PN0000";

  const [rotation, setRotation] = useState(0);
  const [visibleUl, setVisibleUl] = useState(15);
  const rotateArrow = () => {
    setRotation((prev) => (prev === 0 ? 180 : 0));
  };
  const toggleVisibleUl = () => {
    setVisibleUl((prev) => (prev === 15 ? 535 : 15));
  };

  const [Flex, setFlex] = useState(true);

  const [gridSet, setGridSet] = useState("flex");
  const makeFlex = () => {
    setGridSet("flex");
    setFlex(true);
  };
  const makeGrid = () => {
    setGridSet("grid");
    setFlex(false);
  };
  return (
    <div className="projects-bar">
      <div className="projects-top">
        <h2>Projects</h2>
        <button onClick={newPro}>
          <span>+</span>
          <span>Add Project</span>
        </button>
      </div>
      <div className="projects-main">
        <div className="projects-left">
          <div
            className="left-controller"
            onClick={() => {
              rotateArrow();
              toggleVisibleUl();
            }}
          >
            <p>Current Projects</p>
            <i
              style={{ transform: `rotate(${rotation}deg)` }}
              className="fa-solid fa-angle-down"
            ></i>
          </div>
          <ul className="left-ul" style={{ bottom: `${visibleUl}px` }}>
            {projects.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={selectedIndex === index ? "active" : ""}
              >
                <span>{idNember + (index + 1)}</span>
                <h3>{item.name}</h3>
                <small className="view-details">
                  View details <i className="fa-solid fa-angle-right"></i>
                </small>
                {selectedIndex === index && (
                  <div className="selected-line"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="projects-right">
          <div className="right-top">
            <h3>Tasks</h3>
            <ul className="filt-ul">
              <li className="filt" onClick={makeFlex}>
                <Menu />
              </li>
              <li className="filt" onClick={makeGrid}>
                <AlignStartHorizontal />
              </li>
              <li className="filt">
                <AlignStartVertical />
              </li>
            </ul>
            <div className="filt" onClick={showProjectsList}>
              <Funnel />
            </div>
          </div>
          <div className="right-main">
            <div className="active-tasks">
              <div className="shower">Active Tasks</div>
              <ul className="active-tasks-ul" style={{ display: `${gridSet}` }}>
                {tasksTable.map((task, index) =>
                  Flex ? (
                    <li key={index}>
                      <div className="taskName">
                        <span>Task Name</span>
                        <h3>{task.name}</h3>
                      </div>
                      <div className="task-rest">
                        <div>
                          <span>Estimate</span>
                          <h3>{task.estimate}</h3>
                        </div>
                        <div>
                          <span>Spent Time</span>
                          <h3>{task.time}</h3>
                        </div>
                        <div>
                          <span>Assignee</span>
                          <h3>
                            <img src={task.person} alt="person" />
                          </h3>
                        </div>
                        <div>
                          <span>Priority</span>
                          <h3 className={task.priority}>{task.priority}</h3>
                        </div>
                        <div className={task.state}>{task.state}</div>
                      </div>
                    </li>
                  ) : (
                    <li key={index} id="rowing">
                      <div className="taskName">
                        <span>Task Name</span>
                        <h3>{task.name}</h3>
                      </div>
                      <div className="task-bottom">
                        <div className="task-bottom-div">
                          <p>{task.estimate}</p>
                          <div className={task.priority}>
                            <i class="fa-solid fa-arrow-up"></i>
                          </div>
                        </div>
                        <img src={task.person} alt="" />
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="backlog">
              <div className="shower">Backlog</div>
              <ul className="backlog-ul" style={{ display: `${gridSet}` }}>
                {backlogTable.map((task, index) =>
                  Flex ? (
                    <li key={index}>
                      <div className="taskName">
                        <span>Task Name</span>
                        <h3>{task.name}</h3>
                      </div>
                      <div className="task-rest">
                        <div>
                          <span>Estimate</span>
                          <h3>{task.estimate}</h3>
                        </div>
                        <div>
                          <span>Spent Time</span>
                          <h3>{task.time}</h3>
                        </div>
                        <div>
                          <span>Assignee</span>
                          <h3>
                            <img src={task.person} alt="person" />
                          </h3>
                        </div>
                        <div>
                          <span>Priority</span>
                          <h3 className={task.priority}>{task.priority}</h3>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li key={index} id="rowing">
                      <div className="taskName">
                        <span>Task Name</span>
                        <h3>{task.name}</h3>
                      </div>
                      <div className="task-bottom">
                        <div className="task-bottom-div">
                          <p>{task.estimate}</p>
                          <div className={task.priority}>
                            <i class="fa-solid fa-arrow-up"></i>
                          </div>
                        </div>
                        <img src={task.person} alt="" />
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
