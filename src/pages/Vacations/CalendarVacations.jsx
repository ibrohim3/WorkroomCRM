import React from "react";
import "./calendarVacations.css";

const employees = [
  "Oscar Holloway",
  "Evan Yates",
  "Lola Zimmerman",
  "Tyler Curry",
  "Sadie Wolfe",
  "Sean Gibbs",
  "Corey Watts",
  "Theodore Shaw",
  "Edwin Austin",
  "Thomas Cummings",
  "Augusta Gordon",
];

const daysInMonth = Array.from({ length: 29 }, (_, i) => i + 1);

const statusColors = {
  sickApproved: "sick-approved",
  sickPending: "sick-pending",
  remoteApproved: "remote-approved",
  remotePending: "remote-pending",
  vacationApproved: "vacation-approved",
  vacationPending: "vacation-pending",
};

const schedule = {
  // Example: "Oscar Holloway": [{ day: 2, type: "vacationApproved" }, ...]
  "Oscar Holloway": [
    { day: 2, type: "vacationApproved" },
    { day: 3, type: "vacationApproved" },
    { day: 4, type: "vacationApproved" },
    { day: 6, type: "vacationApproved" },
  ],
  "Lola Zimmerman": [
    { day: 6, type: "sickApproved" },
    { day: 7, type: "sickApproved" },
    { day: 8, type: "sickApproved" },
    { day: 9, type: "sickApproved" },
  ],
  "Tyler Curry": [
    { day: 10, type: "remoteApproved" },
    { day: 11, type: "remoteApproved" },
    { day: 12, type: "remoteApproved" },
    { day: 13, type: "remoteApproved" },
    { day: 21, type: "remoteApproved" },
    { day: 22, type: "remoteApproved" },
    { day: 23, type: "remoteApproved" },
  ],
  // Add more data here based on the image...
};

const CalendarVacations = () => {
  return (
    <div className="schedule-container">
      <div className="calendar-header">
        <div className="employee-column-header">Employees</div>
        <div className="days-header">
          {daysInMonth.map((day) => (
            <div key={day} className="day-cell">
              {day}
            </div>
          ))}
        </div>
      </div>

      <div className="body">
        {employees.map((employee) => (
          <div key={employee} className="employee-row">
            <div className="employee-name">{employee}</div>
            <div className="schedule-row">
              {daysInMonth.map((day) => {
                const dayStatus = schedule[employee]?.find(
                  (e) => e.day === day
                );
                return (
                  <div
                    key={day}
                    className={`day-cell ${
                      dayStatus ? statusColors[dayStatus.type] : ""
                    }`}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="legend">
        <div>
          <span className="dot sick-approved"></span> Sick Leave - Approved
        </div>
        <div>
          <span className="dot sick-pending"></span> Sick Leave - Pending
        </div>
        <div>
          <span className="dot remote-approved"></span> Work Remotely - Approved
        </div>
        <div>
          <span className="dot remote-pending"></span> Work Remotely - Pending
        </div>
        <div>
          <span className="dot vacation-approved"></span> Vacation - Approved
        </div>
        <div>
          <span className="dot vacation-pending"></span> Vacation - Pending
        </div>
      </div>
    </div>
  );
};

export default CalendarVacations;
