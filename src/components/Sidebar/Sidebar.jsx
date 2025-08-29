import React from 'react';
import { Home, Calendar, Users, LogOut } from 'lucide-react';

export default function Sidebar({ onLogout }) {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };
  return (
    <div className="sidebar">
      <div>
        <div className="p-6">
          <img src="/white.svg" alt="logo" className="logo" />
        </div>
        <nav>
          <a href="#" className="active">
            <Home size={18} /> <span>Projects</span>
          </a>
          <a href="#">
            <Calendar size={18} /> <span>Calendar</span>
          </a>
          <a href="#">
            <Users size={18} /> <span>Employees</span>
          </a>
        </nav>
      </div>

      <div className="p-4">
        <button className="support">Support</button>
        <button onClick={handleLogout} className="logout">
          <LogOut size={18} /> <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
