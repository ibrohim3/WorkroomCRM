import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import message from '../../assets/images/message.png';

function Sidebar({ handleLogout }) {
  return (
    <div className="sidebar__wrapper">
      <div className="Sidebar">
        <ul className="sidebar__path">
        <img
          className="sidebar__main__img"
          src="./Companylogo.png"
          alt="img"
          loading="lazy"
          width={50}
          height={50}
        />

          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={'dashboard'} 
          >
            <img
              src="./active.png"
              alt="icon"
              loading="lazy"
              width={24}
              height={24}
            />
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={'projects'}
          >
            <img
              src="./inactive.png"
              alt="icon"
              loading="lazy"
              width={24}
              height={24}
            />
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={'calendar'}
          >
            <img
              src="./bookbasket.png"
              alt="icon"
              loading="lazy"
              width={24}
              height={24}
            />
            Calendar
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={'vacations'}
          >
            <img
              src="./sidebar__plane.png"
              alt="icon"
              loading="lazy"
              width={24}
              height={24}
            />
            Vacations
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={'employees'}
          >
            <img
              src="./sidebar__human.png"
              alt="icon"
              loading="lazy"
              width={24}
              height={24}
            />
            Employees
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={'messenger'}
          >
            <img
              src="./sidebar_message.png"
              alt="icon"
              loading="lazy"
              width={24}
              height={24}
            />
            Messenger
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            id="sidebar__active"
            to={'info Portal'}
          >
            <img
              src="./sidebar__folder.png"
              alt="icon"
              loading="lazy"
              width={24}
              height={24}
            />
            Info Portal
          </NavLink>
        </ul>

        <div className="Support_wrapper">
          <img
            className="Support__support_img"
            src="./support.png"
            alt="support"
            width={140}
            height={124}
          />
          {/* Logout btn qoshish kk (handleLogout) */}
          <button onClick={handleLogout}>
            <img src={message} alt="img" width={24} height={24} />
            Support
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
