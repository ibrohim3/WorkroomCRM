import React from "react";
import "./calendarVacations.css";

const employees = [
  "Oscar Holloway",
  "Evan Yates",
  "Lola Zimmermann",
  "Tyler Curry",
  "Sadie Wolfe",
  "Sean Gibbs",
  "Corey Watts",
  "Theodore Shaw",
  "Edwin Austin",
  "Thomas Cummings",
  "Augusta Gordon",
];

const daysInMonth = 28; // bu joyni o'zingiz moslashingiz mumkin

function DayCells({ rowIndex }) {
  return (
    <div className="cells-row">
      {Array.from({ length: daysInMonth }, (_, i) => (
        <div key={i} className="cell">
          {/* Bu joyga kerakli badge yoki data qo‘shiladi */}
        </div>
      ))}
    </div>
  );
}

function CalendarVacation() {
  return (
    <div className="schedule-wrap">
      <div className="schedule-card">
        <div className="header">
          <h3>Employee Schedule</h3>
        </div>

        <div className="main">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="search">
              Employees <input placeholder="Search" />
            </div>
            <ul className="employee-list">
              {employees.map((name, idx) => (
                <li key={idx} className="employee-row">
                  <div className="avatar" />
                  <div className="emp-name">{name}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Grid Area */}
          <div className="grid-area">
            <div className="days-head">
              {Array.from({ length: daysInMonth }, (_, i) => (
                <div key={i} className="day-cell">
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="rows">
              {employees.map((_, idx) => (
                <div key={idx} className="row">
                  <DayCells rowIndex={idx} />
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="legend">
              <div>
                <span className="legend-dot sick approved" /> Sick Leave
                Approved
              </div>
              <div>
                <span className="legend-dot remote approved" /> Work remotely
                Approved
              </div>
              <div>
                <span className="legend-dot vacation approved" /> Vacation
                Approved
              </div>
              <div>
                <span className="legend-dot remote pending" /> Pending
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CalendarVacation;
