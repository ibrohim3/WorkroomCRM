import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import message from "../../assets/images/message.png";
import LogOut from "../../assets/icons/logout.png";

function Sidebar({ onLogout }) {
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

          <NavLink to="dashboard">
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive
                      ? "./dashboard-active.svg"
                      : "./dashboard-inactive.svg"
                  }
                  alt="icon"
                  width={24}
                  height={24}
                />
                Dashboard
              </>
            )}
          </NavLink>

          <NavLink to="projects">
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive ? "./project-active.svg" : "./project-inactive.svg"
                  }
                  alt="icon"
                  width={24}
                  height={24}
                />
                Projects
              </>
            )}
          </NavLink>

          <NavLink to="calendar">
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive
                      ? "./calendar-active.svg"
                      : "./calendar-inactive.svg"
                  }
                  alt="icon"
                  width={24}
                  height={24}
                />
                Calendar
              </>
            )}
          </NavLink>

          <NavLink to="vacations">
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive
                      ? "./vacation-active.svg"
                      : "./vacation-inactive.svg"
                  }
                  alt="icon"
                  width={24}
                  height={24}
                />
                Vacations
              </>
            )}
          </NavLink>

          <NavLink to="employees">
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive
                      ? "./employes-active.svg"
                      : "./employes-inactive.svg"
                  }
                  alt="icon"
                  width={24}
                  height={24}
                />
                Employees
              </>
            )}
          </NavLink>

          <NavLink to="messenger">
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive ? "./message-active.svg" : "./message-inactive.svg"
                  }
                  alt="icon"
                  width={24}
                  height={24}
                />
                Messenger
              </>
            )}
          </NavLink>

          <NavLink to="info-portal">
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? "./info-active.svg" : "./info-inactive.svg"}
                  alt="icon"
                  width={24}
                  height={24}
                />
                Info Portal
              </>
            )}
          </NavLink>
        </ul>

        <div className="Support_wrapper">
          <img
            className="Support__support_img"
            src="./support.png"
            alt="support image"
            width={140}
            height={124}
            fetchPriority="high"
          />
          <button className="support-btn">
            <img src={message} alt="img" width={24} height={24} />
            Support
          </button>
          <div className="sidebar-btns">
            <button className="logout-btn" onClick={onLogout}>
              <img src={LogOut} alt="Log out icon" /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
