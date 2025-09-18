import React, { useState, useEffect } from "react";
import "./settingHead.css";
import { useNavigate, useLocation } from "react-router-dom";

function SettingHead() {
  const [active, setActive] = useState("projects");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("team")) setActive("team");
    else if (location.pathname.includes("myvacations"))
      setActive("myVacations");
    else setActive("projects");
  }, [location.pathname]);

  const handleClick = (tab, path) => {
    setActive(tab);
    navigate(path);
  };

  return (
    <div className="buttons-group2">
      <div className={`slider2 ${active}`}></div>

      <button
        className={`btn ${active === "projects" ? "active" : ""}`}
        onClick={() => handleClick("project", "/my-profile/projects")}
      >
        Projects
      </button>

      <button
        className={`btn ${active === "team" ? "active" : ""}`}
        onClick={() => handleClick("team", "/my-profile/team")}
      >
        Team
      </button>

      <button
        className={`btn ${active === "myVacations" ? "active" : ""}`}
        onClick={() => handleClick("myVacations", "/my-profile/myvacations")}
      >
        My Vacations
      </button>
    </div>
  );
}

export default SettingHead;
