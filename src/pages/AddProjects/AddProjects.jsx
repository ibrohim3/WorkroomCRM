import React, { useState, useEffect, use } from "react";
import "./AddProjects.css";
import { useNavigate } from "react-router-dom";
import mainImage from "../../assets/images/illustration.png";
import logo1 from "../../assets/icons/site-logo.svg";
import logo2 from "../../assets/icons/logo-option5.svg";
import logo3 from "../../assets/icons/logo-option6.svg";
import logo4 from "../../assets/icons/logo-option7.svg";
import logo5 from "../../assets/icons/logo-option8.svg";
import logo6 from "../../assets/icons/logo-option9.svg";
import logo7 from "../../assets/icons/logo-option10.svg";
import logo8 from "../../assets/icons/logo-option11.svg";
import logo9 from "../../assets/icons/logo-option2.svg";
import logo10 from "../../assets/icons/logo-option3.svg";
import logo11 from "../../assets/icons/logo-option4.svg";
import logo12 from "../../assets/icons/logo-option12.svg";
import script1 from "../../assets/icons/script1.svg";
import script2 from "../../assets/icons/script2.svg";

function AddProjects() {
  const getStoredValue = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved !== null ? saved : defaultValue;
  };
  const Navigate = useNavigate();
  const goToMainPage = () => {
    // check if all required inputs are filled
    if (
      nameValue.trim() === "" ||
      startData.trim() === "" ||
      endData.trim() === "" ||
      description.trim() === "" ||
      !selectedLogo
    ) {
      alert("⚠️ Please fill in all fields before continuing.");
      return; // stop navigation
    }
    const newProject = {
      name: nameValue,
      startData,
      endData,
      priority,
      description,
      selectedLogo,
      tasks: [],
    };

    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const updatedProjects = [...storedProjects, newProject];
    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    setProjects(updatedProjects); // App.jsx dagi state update

    Navigate("/projects");
    // Navigate("/main-page");
  };

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
  ];

  const [nameValue, setNameValue] = useState(() =>
    getStoredValue("nameValue", "")
  );
  const handleNameChange = (e) => {
    setNameValue(e.target.value);
    localStorage.setItem("nameValue", e.target.value);
  };

  const [startData, setStartData] = useState(() =>
    getStoredValue("startData", "")
  );
  const handleStartDataChange = (e) => {
    const value = e.target.value;
    if (/^[0-9/]*$/.test(value)) {
      // only numbers and slash
      setStartData(value);
      localStorage.setItem("startData", value);
    }
  };

  const [endData, setEndData] = useState(() => getStoredValue("endData", ""));
  const handleEndDataChange = (e) => {
    const value = e.target.value;
    if (/^[0-9/]*$/.test(value)) {
      // only numbers and slash
      setEndData(value);
      localStorage.setItem("endData", value);
    }
  };

  const [priority, setPriority] = useState(() =>
    getStoredValue("priority", "medium")
  );
  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
    localStorage.setItem("priority", e.target.value);
  };

  const [description, setDescription] = useState(() =>
    getStoredValue("description", "")
  );
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    localStorage.setItem("description", e.target.value);
  };

  const [selectedLogo, setSelectedLogo] = useState(() => {
    return localStorage.getItem("selectedLogo") || logo1; // default
  });

  const [isVisible, setIsVisible] = useState(true);
  const toggleDisplay = () => {
    setIsVisible((prev) => !prev);
  };

  const [constructionVisible, setConstructionVisible] = useState(false);
  const removeConstructionBar = () => {
    setConstructionVisible(false);
  };
  const returnConstructionBar = () => {
    setConstructionVisible(true);
  };

  return (
    <div className="add-projects-bar">
      <div
        style={{ display: isVisible ? "none" : "flex" }}
        className="add-project-x"
      >
        <img src={mainImage} alt="Add main image" />
        <button onClick={toggleDisplay}>+ Add Project</button>
      </div>
      <div
        style={{ display: isVisible ? "flex" : "none" }}
        className="add-projects-container"
      >
        <div className="add-project-left">
          <h2>Add Project</h2>
          <div className="inputs">
            <div className="name-input">
              <label htmlFor="projectName">Project Name: {nameValue}</label>
              <input
                onChange={handleNameChange}
                value={nameValue}
                type="text"
                id="projectName"
                placeholder="Project Name"
              />
            </div>

            <div className="add-data">
              <div>
                <label htmlFor="projectStart">Starts: {startData}</label>
                <div className="data-div">
                  <input
                    onChange={handleStartDataChange}
                    value={startData}
                    type="text"
                    id="projectStart"
                    placeholder="DD/MM/YYYY"
                  />
                  <i className="fa-regular fa-calendar"></i>
                </div>
              </div>
              <div>
                <label htmlFor="projectEnd">Dead Line: {endData}</label>
                <div className="data-div">
                  <input
                    onChange={handleEndDataChange}
                    value={endData}
                    type="text"
                    id="projectEnd"
                    placeholder="DD/MM/YYYY"
                  />
                  <i className="fa-regular fa-calendar"></i>
                </div>
              </div>
            </div>

            <div className="add-priority">
              <label htmlFor="projectPriority">Priority: {priority}</label>
              <div className="select-div">
                <select
                  onChange={handlePriorityChange}
                  value={priority}
                  id="projectPriority"
                >
                  <option value="Optional">Optional</option>
                  <option value="Medium">Medium</option>
                  <option value="Urgent">Urgent</option>
                </select>
              </div>
            </div>

            <div className="add-description">
              <label htmlFor="add-Description">Description</label>
              <textarea
                onChange={handleDescriptionChange}
                value={description}
                id="add-Description"
                cols="30"
                rows="5"
                placeholder="Add some description of the project"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="add-project-right">
          <div className="project-right-top">
            <div className="project-image">
              <p>Project image:</p>
              <img src={selectedLogo} alt="selectedimg" />
            </div>
            <div className="site-logo-opts">
              <div>
                <h3>Select image</h3>
                <p>
                  Select or upload an avatar for the project (available formats:
                  jpg, png)
                </p>
              </div>
              <ul>
                {logos.map((logo, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSelectedLogo(logo);
                      localStorage.setItem("selectedLogo", logo);
                    }}
                  >
                    <img
                      src={logo}
                      alt={`logo${index + 1}`}
                      className={selectedLogo === logo ? "selected-logo" : ""}
                    />
                  </li>
                ))}
                <li onClick={returnConstructionBar}>
                  <img src={logo12} alt="" />
                </li>
              </ul>
            </div>
            <div className="add-scripts">
              <img src={script1} alt="script1" />
              <img src={script2} alt="script2" />
            </div>
          </div>
          <button className="add-project-bottom" onClick={goToMainPage}>
            Save Project
          </button>
        </div>
        <button className="x-btn" onClick={toggleDisplay}>
          ✕
        </button>
      </div>
      <div
        style={{ display: constructionVisible ? "flex" : "none" }}
        className="construction-bar"
      >
        <button onClick={removeConstructionBar} className="x-btn2">
          ✕
        </button>
        <div className="wrench-icon">
          <i class="fa-solid fa-wrench wrench"></i>
          <i class="fa-solid fa-hexagon bolt"></i>
        </div>
        <p>This section is still under construction.</p>
      </div>
      <div
        onClick={removeConstructionBar}
        style={{ display: constructionVisible ? "flex" : "none" }}
        className="shadow-bar"
      ></div>
    </div>
  );
}

export default AddProjects;
