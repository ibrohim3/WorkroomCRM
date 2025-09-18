import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Calendar from "../pages/calendar/Calendar";
import Dashboard from "../pages/dashboard/Dashboard";
import AddProjects from "../pages/AddProjects/AddProjects";
import Projects from "../pages/Projects/Projects";
import ProjectsMainPage from "../pages/AddProjects/ProjectsMainPage";
import MainVac from "../pages/Vacations/MainVac";
import MyProfile from "../pages/MyProfile/MyProfile";
import Employees from "../pages/Employees/Employees";
function AppRouter({ isLoggedIn }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/main-page" element={<ProjectsMainPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/employes" element={<Employees />} />
        {/* <Route
          path="/projects"
          element={isLoggedIn ? <Projects /> : <Navigate to="/add-projects" />}
        /> */}
        <Route path="/add-projects" element={<AddProjects />} />
        <Route path="main-page" element={<ProjectsMainPage />} />
        <Route path="/calendar" element={<Calendar />} />

        <Route path="/vacations/*" element={<MainVac />} />

        {/* My Profile  */}
        <Route path="/my-profile/*" element={<MyProfile />} />
        {/* profile setting */}
      </Routes>
    </div>
  );
}

export default AppRouter;
