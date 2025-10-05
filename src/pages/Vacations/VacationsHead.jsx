import React, { useState } from "react";
import "./vacationsHead.css";

function VacationsHead({ onMoveEmployees, onMovePage }) {
  const [activeTab, setActiveTab] = useState("vacations");

  return (
    <header className="vac-header">
      <h2>Vacations</h2>
      <div className="buttons-group">
        <div className={`slider ${activeTab}`} />

        <button
          className={`btn ${activeTab === "vacations" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("vacations");
            onMoveEmployees();
          }}
        >
          Employees’ vacations
        </button>

        <button
          className={`btn ${activeTab === "calendar" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("calendar");
            onMovePage();
          }}
        >
          Calendar
        </button>
      </div>

      <button className="add-request">+ Add Request</button>
    </header>
  );
}

export default VacationsHead;
