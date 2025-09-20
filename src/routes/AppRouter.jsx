import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Calendar from "../pages/calendar/Calendar";
import Dashboard from "../pages/dashboard/Dashboard";
// import AddProjects from "../pages/AddProjects/AddProjects";
import AddNewProject from "../pages/Projects/AddNewProject";
import ProjectsCollect from "../pages/Projects/ProjectsCollect";
import ProjectsMainPage from "../pages/AddProjects/ProjectsMainPage";
import MainVac from "../pages/Vacations/MainVac";
import MyProfile from "../pages/MyProfile/MyProfile";
import Employees from "../pages/Employees/Employees";
import NotificationToggle from "../pages/MyProfile/Notif/NotificationToggle";

function AppRouter({ isLoggedIn }) {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/main-page" element={<ProjectsMainPage />} />
        <Route path="/projects/*" element={<ProjectsCollect />} />
        <Route path="/projects/newProject" element={<AddNewProject />} />
        <Route path="/employes" element={<Employees />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/vacations/*" element={<MainVac />} />
        <Route path="/my-profile/*" element={<MyProfile />} />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
