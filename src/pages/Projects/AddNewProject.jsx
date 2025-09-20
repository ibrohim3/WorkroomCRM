import React, { useState } from "react";
import "./AddNewProject.css";
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

function AddNewProject() {
  const Navigate = useNavigate();

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

  // States for inputs
  const [nameValue, setNameValue] = useState("");
  const [startData, setStartData] = useState("");
  const [endData, setEndData] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [description, setDescription] = useState("");
  const [selectedLogo, setSelectedLogo] = useState(logo1);

  const [isVisible, setIsVisible] = useState(true);
  const [constructionVisible, setConstructionVisible] = useState(false);

  const toggleDisplay = () => setIsVisible((prev) => !prev);
  const removeConstructionBar = () => setConstructionVisible(false);
  const returnConstructionBar = () => setConstructionVisible(true);

  // Save project
  // Save project
  const goToMainPage = () => {
    if (
      nameValue.trim() === "" ||
      startData.trim() === "" ||
      endData.trim() === "" ||
      description.trim() === "" ||
      !selectedLogo
    ) {
      alert("⚠️ Please fill in all fields before continuing.");
      return;
    }

    const newProject = {
      name: nameValue,
      start: startData,
      end: endData,
      priority: priority,
      description: description,
      logo: selectedLogo,
    };

    // Get existing projects or empty array
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];

    // Add new project
    storedProjects.push(newProject);

    // Save back to localStorage
    localStorage.setItem("projects", JSON.stringify(storedProjects));

    // 🔹 Mark that user has created a project
    localStorage.setItem("hasCreatedProject", "true");

    // Clear form
    setNameValue("");
    setStartData("");
    setEndData("");
    setPriority("Medium");
    setDescription("");
    setSelectedLogo(logo1);

    // Navigate home (dashboard yoki /projects listga o‘tishi mumkin)
    Navigate("/dashboard");

    console.log(storedProjects);
  };
  const xMark = () => {
    Navigate("/");
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
              <label htmlFor="projectName">Project Name:</label>
              <input
                onChange={(e) => setNameValue(e.target.value)}
                value={nameValue}
                type="text"
                id="projectName"
                placeholder="Project Name"
              />
            </div>

            <div className="add-data">
              <div>
                <label htmlFor="projectStart">Starts:</label>
                <div className="data-div">
                  <input
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[0-9/]*$/.test(value)) setStartData(value);
                    }}
                    value={startData}
                    type="text"
                    id="projectStart"
                    placeholder="DD/MM/YYYY"
                  />
                  <i className="fa-regular fa-calendar"></i>
                </div>
              </div>
              <div>
                <label htmlFor="projectEnd">Dead Line:</label>
                <div className="data-div">
                  <input
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[0-9/]*$/.test(value)) setEndData(value);
                    }}
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
              <label htmlFor="projectPriority">Priority:</label>
              <div className="select-div">
                <select
                  onChange={(e) => setPriority(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
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
                  <li key={index} onClick={() => setSelectedLogo(logo)}>
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
        <button className="x-btn" onClick={xMark}>
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
          <i className="fa-solid fa-wrench wrench"></i>
          <i className="fa-solid fa-hexagon bolt"></i>
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

export default AddNewProject;
