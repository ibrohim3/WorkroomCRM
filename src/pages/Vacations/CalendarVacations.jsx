import React from 'react';
import './calendarVacations.css';

const daysInMonth = 30;

const employees = [
  {
    id: 1,
    name: 'Oscar Holloway',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    leaves: [
      { day: 1, type: 'vacation', status: 'approved' },
      { day: 2, type: 'vacation', status: 'approved' },
      { day: 3, type: 'vacation', status: 'approved' },
      { day: 12, type: 'workremotely', status: 'approved' },
      { day: 13, type: 'workremotely', status: 'approved' },
      { day: 19, type: 'workremotely', status: 'approved' },
    ],
  },
  {
    id: 2,
    name: 'Evan Yates',
    avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
    leaves: [
      { day: 3, type: 'sickleave', status: 'pending' },
      { day: 4, type: 'sickleave', status: 'pending' },
      { day: 5, type: 'sickleave', status: 'pending' },
      { day: 20, type: 'vacation', status: 'approved' },
      { day: 21, type: 'vacation', status: 'approved' },
    ],
  },
  {
    id: 3,
    name: 'Lola Zimmerman',
    avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
    leaves: [
      { day: 6, type: 'workremotely', status: 'approved' },
      { day: 7, type: 'workremotely', status: 'approved' },
      { day: 8, type: 'workremotely', status: 'approved' },
      { day: 9, type: 'workremotely', status: 'approved' },
      { day: 10, type: 'workremotely', status: 'approved' },
      { day: 11, type: 'workremotely', status: 'approved' },
    ],
  },
  // Qo'shimcha xodimlar ham shu kabi bo'ladi...
];

function CalendarVacations() {
  return (
    <div className="calendar-container">
      <div className="header-row">
        <div className="employee-label">Employees</div>
        {[...Array(daysInMonth)].map((_, i) => (
          <div key={i} className="day-header">
            {i + 1}
          </div>
        ))}
      </div>

      {employees.map((emp) => (
        <div key={emp.id} className="employee-row">
          <div className="employee-info">
            <img src={emp.avatar} alt={emp.name} className="avatar" />
            <span>{emp.name}</span>
          </div>

          {[...Array(daysInMonth)].map((_, dayIdx) => {
            const leave = emp.leaves.find((l) => l.day === dayIdx + 1);
            const className = leave
              ? `day-cell ${leave.type}-${leave.status}`
              : 'day-cell';
            return <div key={dayIdx} className={className}></div>;
          })}
        </div>
      ))}

      <div className="legend">
        <div>
          <span className="legend-box vacation-approved"></span> Vacation
          (Approved)
        </div>
        <div>
          <span className="legend-box vacation-pending"></span> Vacation
          (Pending)
        </div>
        <div>
          <span className="legend-box sickleave-approved"></span> Sick Leave
          (Approved)
        </div>
        <div>
          <span className="legend-box sickleave-pending"></span> Sick Leave
          (Pending)
        </div>
        <div>
          <span className="legend-box workremotely-approved"></span> Work
          remotely (Approved)
        </div>
        <div>
          <span className="legend-box workremotely-pending"></span> Work
          remotely (Pending)
        </div>
      </div>
    </div>
  );
}

export default CalendarVacations;
