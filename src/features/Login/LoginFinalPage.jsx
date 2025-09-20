import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginFinalPage.css";
import arrow from "../../assets/icons/white.svg";
import finalImg from "../../assets/images/illustration.png";

function LoginFinalPage({ onLogin }) {
  const navigate = useNavigate();

  const handleNext = () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("hasCreatedProject", "false");

    onLogin?.();
    navigate("/projects/newProject");
  };

  return (
    <div className="final-page">
      <div className="final-container">
        <div className="final-content">
          <img src={finalImg} alt="final" />
          <div className="final-bottom">
            <h2>You are successfully registered!</h2>
            <button onClick={handleNext}>
              Let's start <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginFinalPage;
