import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./settingSidebar.css";
function SettingSidebar() {
  const navigate = useNavigate();
  function MovePage() {
    navigate("/my-profile");
  }
  return (
    <div className="sidebar-con">
      <button className="move-btn" onClick={MovePage}>
        <i className="fa-solid fa-arrow-left"></i> Setting
      </button>
      <div className="sidebar">
        <ul className="sidebar-path">
          <NavLink to="account">
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? "/user-inactive.svg" : "/user-inactive.svg"}
                  alt="icon"
                  width={24}
                  height={24}
                />
                Account
              </>
            )}
          </NavLink>

          <NavLink to="notifications">
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? "/notif-blue.svg" : "/notif-blue.svg"}
                  alt="icon"
                  width={24}
                  height={24}
                />
                Notifications
              </>
            )}
          </NavLink>

          <NavLink to="calendar">
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive ? "/company-inactive.svg" : "/company-inactive.svg"
                  }
                  alt="icon"
                  width={24}
                  height={24}
                />
                My Company
              </>
            )}
          </NavLink>

          <NavLink to="vacations">
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? "/app-inactivesvg" : "/app-inactive.svg"}
                  alt="icon"
                  width={24}
                  height={24}
                />
                Connected Apps
              </>
            )}
          </NavLink>

          <NavLink to="employees">
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive ? "/payment-inactive.svg" : "/payment-inactive.svg"
                  }
                  alt="icon"
                  width={24}
                  height={24}
                />
                Payments
              </>
            )}
          </NavLink>

          <NavLink to="messenger">
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? "/conf-inactive.svg" : "/conf-inactive.svg"}
                  alt="icon"
                  width={24}
                  height={24}
                />
                Confidentiality
              </>
            )}
          </NavLink>

          <NavLink to="info-portal">
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? "/safe-inactive.svg" : "/safe-inactive.svg"}
                  alt="icon"
                  width={24}
                  height={24}
                />
                Safety
              </>
            )}
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default SettingSidebar;
