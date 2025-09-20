import React from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
import "./myProfile.css";
import SettingHead from "./SettingHead";
import SettingSidebar from "./SettingSidebar";
import NotificationToggle from "./Notif/NotificationToggle";
function MyProfile() {
  const location = useLocation();

  const isSettingPage = location.pathname.includes("profile-setting");

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
          <Routes>
            {/* profile-setting ichida sidebar va ichki sahifalar */}
            <Route path="profile-setting/*" element={<SettingSidebar />}>
              <Route
                path="account"
                element={<div>Account Settings Page</div>}
              />
              <Route
                path="calendar"
                element={<div>Calendar Settings Page</div>}
              />
              <Route path="notifications" element={<NotificationToggle />} />
              {/* boshqa bo‘limlar ham shu yerga qo‘shiladi */}
            </Route>

            {/* tashqarida qolgan routelar */}
            <Route path="project" element={<div>Projects Page</div>} />
            <Route path="team" element={<div>Team Page</div>} />
            <Route path="myvacations" element={<div>My Vacations Page</div>} />

            {/* Default */}
            <Route path="*" element={<div>Projects Page</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
