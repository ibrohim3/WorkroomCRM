import React from "react";
import "./calendarVacations.css";

const DAYS_IN_MONTH = 30;

const employees = [
  {
    id: 1,
    name: "Oscar Holloway",
    avatarText: "O",
    leaves: [
      { type: "vacation", status: "approved", start: 1, end: 3 },
      { type: "vacation", status: "approved", start: 6, end: 6 },
      { type: "sick", status: "pending", start: 18, end: 21 },
    ],
  },
  {
    id: 2,
    name: "Evan Yates",
    avatarText: "E",
    leaves: [{ type: "vacation", status: "approved", start: 5, end: 7 }],
  },
  {
    id: 3,
    name: "Lola Zimmerman",
    avatarText: "L",
    leaves: [{ type: "sick", status: "approved", start: 8, end: 11 }],
  },
  {
    id: 4,
    name: "Tyler Curry",
    avatarText: "T",
    leaves: [{ type: "remote", status: "approved", start: 9, end: 12 }],
  },
  {
    id: 5,
    name: "Sadie Wolfe",
    avatarText: "S",
    leaves: [{ type: "vacation", status: "approved", start: 23, end: 26 }],
  },
  {
    id: 6,
    name: "Sean Gibbs",
    avatarText: "Se",
    leaves: [{ type: "vacation", status: "approved", start: 27, end: 27 }],
  },
  {
    id: 7,
    name: "Corey Watts",
    avatarText: "C",
    leaves: [{ type: "remote", status: "approved", start: 12, end: 15 }],
  },
  {
    id: 8,
    name: "Theodore Shaw",
    avatarText: "Th",
    leaves: [{ type: "remote", status: "approved", start: 6, end: 9 }],
  },
  {
    id: 9,
    name: "Edwin Austin",
    avatarText: "E",
    leaves: [{ type: "sick", status: "approved", start: 16, end: 17 }],
  },
  {
    id: 10,
    name: "Thomas Cummings",
    avatarText: "T",
    leaves: [{ type: "vacation", status: "pending", start: 11, end: 14 }],
  },
  {
    id: 11,
    name: "Augusta Gordon",
    avatarText: "A",
    leaves: [{ type: "vacation", status: "approved", start: 24, end: 28 }],
  },
];

function DayHeader() {
  const days = Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1);
  return (
    <div className="calendar-header">
      <div className="left-col-title">Employees</div>
      <div className="days-row">
        {days.map((d) => (
          <div key={d} className="day-cell">
            <div className="day-number">{d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="legend">
      <div className="legend-item">
        <div className="legend-swatch vacation approved"></div>
        <span>Vacation — Approved</span>
      </div>
      <div className="legend-item">
        <div className="legend-swatch vacation pending"></div>
        <span>Vacation — Pending</span>
      </div>
      <div className="legend-item">
        <div className="legend-swatch sick approved"></div>
        <span>Sick — Approved</span>
      </div>
      <div className="legend-item">
        <div className="legend-swatch sick pending"></div>
        <span>Sick — Pending</span>
      </div>
      <div className="legend-item">
        <div className="legend-swatch remote approved"></div>
        <span>Work remotely — Approved</span>
      </div>
    </div>
  );
}

function EmployeeRow({ employee }) {
  return (
    <div className="employee-row">
      <div className="employee-left">
        <div className="avatar">{employee.avatarText}</div>
        <div className="employee-name">{employee.name}</div>
      </div>

      <div
        className="employee-days"
        style={{
          gridTemplateColumns: `repeat(${DAYS_IN_MONTH}, 1fr)`,
        }}
      >
        {Array.from({ length: DAYS_IN_MONTH }, (_, i) => (
          <div key={i} className="day-bg" />
        ))}

        {employee.leaves.map((leave, idx) => {
          const { start, end, type, status } = leave;
          const classes = `leave-block ${type} ${
            status === "pending" ? "pending" : "approved"
          }`;
          return (
            <div
              key={idx}
              className={classes}
              style={{
                gridColumnStart: start,
                gridColumnEnd: end + 1,
              }}
              title={`${type} (${status}) — ${start}–${end}`}
            />
          );
        })}
      </div>
    </div>
  );
}

function CalendarVacations() {
  return (
    <div className="container2">
      <div className="title-row">
        <h2>First month (September)</h2>
        <div className="nav-arrows">← →</div>
      </div>

      <DayHeader />

      <div className="rows">
        {employees.map((emp) => (
          <EmployeeRow key={emp.id} employee={emp} />
        ))}
      </div>

      <Legend />
    </div>
  );
}

export default CalendarVacations;
