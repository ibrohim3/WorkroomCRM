import React from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
import "./myProfile.css";
import SettingHead from "./SettingHead";
import SettingSidebar from "./SettingSidebar";

function MyProfile() {
  const location = useLocation();

  const isSettingPage = location.pathname.endsWith("profile-setting");

  return (
    <div className="div0">
      <header className="profile-header">
        <h1>My Profile</h1>
        {!isSettingPage && (
          <NavLink to={"profile-setting"}>
            <div className="setting-icon">
              <i className="fa-solid fa-gear"></i>
            </div>
          </NavLink>
        )}
      </header>

      <div className="profile">
        <ProfileInfo />
        <div className="content">
          {!isSettingPage && <SettingHead />}

          {/* Nested Routes */}
          <Routes>
            <Route path="project" element={<div>Projects Page</div>} />
            <Route path="team" element={<div>Team Page</div>} />
            <Route path="myvacations" element={<div>My Vacations Page</div>} />
            <Route path="/profile-setting/*" element={<SettingSidebar />} />

            {/* Default */}
            <Route path="*" element={<div>Projects Page</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
