import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Calendar from '../pages/calendar/Calendar';
import Dashboard from '../pages/dashboard/Dashboard';
import Projects from '../pages/Projects/Projects';
// import ProjectDetails from '../pages/Projects/ProjectDetails/ProjectDetails';
// import AddProject from '../pages/Projects/AddProject/AddProject';
function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/calendar" element={<Calendar />} />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
