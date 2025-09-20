import React from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import "./settingSidebar.css";

function SettingSidebar() {
  const navigate = useNavigate();

  function MovePage() {
    navigate("/my-profile");
  }

  return (
    <div className="sidebar-layout">
      <div className="sidebar-con">
        <button className="move-btn" onClick={MovePage}>
          <i className="fa-solid fa-arrow-left"></i> Setting
        </button>

        <div className="sidebar">
          <ul className="sidebar-path">
            <li>
              <NavLink
                to="account"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img
                  src="/user-inactive.svg"
                  alt="Account icon"
                  width={24}
                  height={24}
                />
                Account
              </NavLink>
            </li>

            <li>
              <NavLink
                to="notifications"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img
                  src="/notif-blue.svg"
                  alt="Notifications icon"
                  width={24}
                  height={24}
                />
                Notifications
              </NavLink>
            </li>

            <li>
              <NavLink
                to="my-company"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img
                  src="/company-inactive.svg"
                  alt="Company icon"
                  width={24}
                  height={24}
                />
                My Company
              </NavLink>
            </li>

            <li>
              <NavLink
                to="connected-app"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img
                  src="/app-inactive.svg"
                  alt="Apps icon"
                  width={24}
                  height={24}
                />
                Connected Apps
              </NavLink>
            </li>

            <li>
              <NavLink
                to="payment"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img
                  src="/payment-inactive.svg"
                  alt="Payment icon"
                  width={24}
                  height={24}
                />
                Payments
              </NavLink>
            </li>

            <li>
              <NavLink
                to="confidentiality"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img
                  src="/conf-inactive.svg"
                  alt="Confidentiality icon"
                  width={24}
                  height={24}
                />
                Confidentiality
              </NavLink>
            </li>

            <li>
              <NavLink
                to="safety"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img
                  src="/safe-inactive.svg"
                  alt="Safety icon"
                  width={24}
                  height={24}
                />
                Safety
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebar-content">
        <Outlet />
      </div>
    </div>
  );
}

export default SettingSidebar;
