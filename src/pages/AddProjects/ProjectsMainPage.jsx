import React from "react";
import "./ProjectsMainPage.css";
import {
  Menu,
  AlignStartHorizontal,
  AlignStartVertical,
  Funnel,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supportImage from "../../assets/images/support-image.png";
import userImage from "../../assets/icons/user-image.svg";
import script1 from "../../assets/icons/script1.svg";
import script2 from "../../assets/icons/script2.svg";
import rightContentImg from "../../assets/images/right-content-img.png";

function ProjectsMainPage() {
  const menu = [
    {
      icon: '<i class="fa-solid fa-grip"></i>',
      name: "Dashboard",
    },
    {
      icon: '<i class="fa-solid fa-layer-group"></i>',
      name: "Projects",
    },
    {
      icon: '<i class="fa-solid fa-calendar"></i>',
      name: "Calendar",
    },
    {
      icon: '<i class="fa-solid fa-plane-up"></i>',
      name: "Vacations",
    },
    {
      icon: '<i class="fa-solid fa-user-group"></i>',
      name: "Employees",
    },
  ];
  const [animate, setAnimate] = useState(false);
  const iconRef = useRef(null);

  const handleClick = () => {
    const icon = iconRef.current;

    // remove class
    icon.classList.remove("animate");

    // force reflow (this makes the browser "forget" the animation)
    void icon.offsetWidth;

    // add class back
    icon.classList.add("animate");
  };
  const navigate = useNavigate();
  const MoveToAdd = () => {
    navigate("/projects");
  };

  const [show, setShow] = useState(false);

  const nameValue = localStorage.getItem("nameValue") || "";
  const startData = localStorage.getItem("startData") || "";
  const endData = localStorage.getItem("endData") || "";
  const priority = localStorage.getItem("priority") || "";
  const description = localStorage.getItem("description") || "";
  const selectedLogo = localStorage.getItem("selectedLogo") || "";

  // Load tasks from localStorage or start empty
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const [taskName, setTaskName] = useState("");
  const [taskGroup, setTaskGroup] = useState("design");
  const [taskDuration, setTaskDuration] = useState("");
  const [taskDead, setTaskDead] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium");
  const [taskAssignee, setTaskAssignee] = useState("Evan Yates");
  const [taskDescript, setTaskDescript] = useState("");

  const addTask = () => {
    if (!taskName.trim()) return; // prevent empty task
    console.log(tasks);

    const newTask = {
      id: Date.now(), // unique ID
      taskName,
      taskGroup,
      taskDuration,
      taskDead,
      taskPriority,
      taskAssignee,
      taskDescript,
      completed: false,
    };

    setTasks([...tasks, newTask]); // add to array
    setTaskName(""); // reset input
    setTaskGroup("design");
    setTaskDuration("");
    setTaskDead("");
    setTaskPriority("Medium");
    setTaskAssignee("Evan Yates");
    setTaskDescript("");
  };

  const noProjectBar = {
    display: tasks.length === 0 ? "flex" : "none",
  };
  return (
    <div className="project-main-page">
      <div className="main-page-right">
        <div className="right-title">
          <p onClick={MoveToAdd}>
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back to Projects</span>
          </p>
          <div className="title-btn">
            <h2>{nameValue}</h2>
            <button onClick={() => setShow(!show)}>
              <span>+</span>
              <span>Add Task</span>
            </button>
          </div>
        </div>
        <div className="right-content">
          <div className="right-content_left">
            <div className="content-left-first">
              <div>
                <p>Project Number</p>
                <span>PN0001245</span>
              </div>
              <div onClick={MoveToAdd}>
                <i className="fa-regular fa-pen-to-square"></i>
              </div>
            </div>

            <div className="content-left-second">
              <h3>Description</h3>
              <p>{description}</p>
            </div>

            <div className="content-left-third">
              <div>
                <span>Reporter</span>
                <div>
                  <img src={userImage} alt="user -img" />
                  <span>Evan Yates</span>
                </div>
              </div>

              <div>
                <span>Essignees</span>
                <div>
                  <img src={userImage} alt="user" />
                </div>
              </div>

              <div className="priority-div">
                <span>Priority</span>
                <div className={priority}>
                  <i className="fa-solid fa-arrow-up"></i>
                  <p className="priority-text">{priority}</p>
                </div>
              </div>

              <div>
                <span>Dead Line:</span>
                <p>{endData}</p>
              </div>
            </div>
            <div className="content-left-forth">
              <i className="fa-solid fa-calendar"></i>
              <p>Created: {startData}</p>
            </div>
            <div className="content-left-fifth">
              <img src={script1} alt="script1" />
              <img src={script2} alt="script2" />
            </div>
          </div>
          <div className="right-content_right">
            <div className="right-content_top">
              <h3>Tasks</h3>
              <ul>
                <li>
                  <Menu />
                </li>
                <li>
                  <AlignStartHorizontal />
                </li>
                <li>
                  <AlignStartVertical />
                </li>
              </ul>
              <div className="filter">
                <Funnel />
              </div>
            </div>

            {/* displays when there is no project */}
            <div className="right-content-noProject" style={noProjectBar}>
              <img src={rightContentImg} alt="right-content-img" />
              <p>There are no tasks in this project yet Let's add them</p>
              <button onClick={() => setShow(!show)}>
                <span>+</span>
                <span>Add Task</span>
              </button>
            </div>

            {/* displays when there are projects */}
            <div className="right-content-project">
              <ul
                className="tasks-ul"
                style={{ display: tasks.length > 0 ? "flex" : "none" }}
              >
                {tasks.map((task) => (
                  <li key={task.id} className="task-card">
                    <div className="task-card-title">
                      <span>Task Name</span>
                      <h3>{task.taskName || "Not given"}</h3>
                    </div>
                    <ul className="task-card-details">
                      <li>
                        <span>Estimate</span>
                        <h3>{task.taskDuration || "Not given"}</h3>
                      </li>
                      <li>
                        <span>Spent Time</span>
                        <h3>{task.taskDead || "Not given"}</h3>
                      </li>
                      <li>
                        <span>Assignee</span>
                        <h3>{task.taskAssignee}</h3>
                      </li>
                      <li>
                        <span>Priority</span>
                        <h3 className={task.taskPriority}>
                          <i class="fa-solid fa-arrow-up"></i>
                          <span>{task.taskPriority}</span>
                        </h3>
                      </li>
                      <li className="to-do">To Do</li>
                      <li className="circle-task"></li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Add project shadow */}
      <div
        className="add-task-shadow"
        style={{ display: show ? "flex" : "none" }}
        onClick={() => setShow(!show)}
      ></div>

      {/* Add project bar */}
      <div className="add-task-bar" style={{ display: show ? "flex" : "none" }}>
        <div className="add-task-title">
          <h3>Add Task</h3>
          <button onClick={() => setShow(!show)}>✕</button>
        </div>

        <div className="task-name col">
          <label htmlFor="TaskName">Task Name</label>
          <input
            type="text"
            id="TaskName"
            placeholder="Task Name"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
        </div>

        <div className="task-group col">
          <label htmlFor="TaskGroup">Task Group</label>
          <div className="task-select">
            <select
              name=""
              id="TaskGroup"
              onChange={(e) => setTaskGroup(e.target.value)}
              value={taskGroup}
            >
              <option value="design">Design</option>
              <option value="build">Build</option>
              <option value="construct">Construct</option>
              <option value="plan">Plan</option>
            </select>
          </div>
        </div>

        <div className="task-date">
          <div className="col">
            <label htmlFor="Estimate">Estimate</label>
            <div>
              <input
                type="text"
                placeholder="Select Duration"
                id="Estimate"
                onChange={(e) => setTaskDuration(e.target.value)}
                value={taskDuration}
              />
              <i className="fa-regular fa-clock"></i>
            </div>
          </div>

          <div className="col">
            <label htmlFor="Dead-line">Dead Line</label>
            <div>
              <input
                type="text"
                placeholder="Select Date"
                id="Dead-line"
                onChange={(e) => setTaskDead(e.target.value)}
                value={taskDead}
              />
              <i className="fa-regular fa-calendar"></i>
            </div>
          </div>
        </div>

        <div className="task-priority col">
          <label htmlFor="Task-priority">Priority</label>
          <div className="task-select-div">
            <select
              name=""
              id="Task-priority"
              onChange={(e) => setTaskPriority(e.target.value)}
              value={taskPriority}
            >
              <option value="Medium">Medium</option>
              <option value="Optional">Optional</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
        </div>

        <div className="task-assignee col">
          <label htmlFor="Assignees">Assignee</label>
          <div className="task-select-div">
            <select
              name=""
              id="Assignees"
              onChange={(e) => setTaskAssignee(e.target.value)}
              value={taskAssignee}
            >
              <option value="Evan Yates">Evan Yates</option>
              <option value="John Doe">John Doe</option>
              <option value="Sarah Smith">Sarah Smith</option>
            </select>
          </div>
        </div>

        <div className="task-description col">
          <label htmlFor="Description-add">Description</label>
          <textarea
            name=""
            id="Description-add"
            placeholder="Add some description of the task"
            onChange={(e) => setTaskDescript(e.target.value)}
            value={taskDescript}
          ></textarea>
        </div>

        <div className="task-footer">
          <ul>
            <li>
              <img src={script1} alt="script2.1" />
            </li>
            <li>
              <img src={script2} alt="script2.2" />
            </li>
          </ul>
          <button
            onClick={() => {
              addTask();
              setShow(!show);
            }}
          >
            Save Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsMainPage;
