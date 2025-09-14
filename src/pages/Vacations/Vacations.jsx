import React from "react";
import "./vacations.css"; // CSS faylini import qilamiz

const employees = [
  {
    id: 1,
    name: "Ryan Thompson",
    email: "ryanthom@gmail.com",
    vacations: 15,
    sickLeave: 3,
    workRemotely: 50,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Vincent Allen",
    email: "vincenta@gmail.com",
    vacations: 10,
    sickLeave: 6,
    workRemotely: 34,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Grace Joseph",
    email: "gracejose@gmail.com",
    vacations: 10,
    sickLeave: 5,
    workRemotely: 19,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Emily Tyler",
    email: "tyleremily24@gmail.com",
    vacations: 8,
    sickLeave: 7,
    workRemotely: 41,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Lenora Fowler",
    email: "cranril@ec.gov",
    vacations: 14,
    sickLeave: 4,
    workRemotely: 38,
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "Maude Goodman",
    email: "maudegood@gmail.com",
    vacations: 12,
    sickLeave: 6,
    workRemotely: 45,
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "Delia Santos",
    email: "santos1598@gmail.com",
    vacations: 10,
    sickLeave: 5,
    workRemotely: 12,
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    id: 8,
    name: "Brandon Potter",
    email: "brandonp@gmail.com",
    vacations: 8,
    sickLeave: 7,
    workRemotely: 48,
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

export default function Vacations() {
  return (
    <div className="vac-container">
      <div className="employee-list">
        {employees.map((emp) => (
          <div key={emp.id} className="employee-card">
            <div className="employee-info">
              <img src={emp.avatar} alt={emp.name} className="avatar" />
              <div>
                <p className="name">{emp.name}</p>
                <p className="email">{emp.email}</p>
              </div>
            </div>
            <div className="stats">
              <div>
                <p className="label">Vacations</p>
                <p>{emp.vacations}</p>
              </div>
              <div>
                <p className="label">Sick Leave</p>
                <p>{emp.sickLeave}</p>
              </div>
              <div>
                <p className="label">Work remotely</p>
                <p>{emp.workRemotely}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
