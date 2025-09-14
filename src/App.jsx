import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Login from "./features/Login/Login";
import LoginPage1 from "./features/Login/LoginPage1";
import LoginPage2 from "./features/Login/LoginPage2";
import LoginPage3 from "./features/Login/LoginPage3";
import LoginPage4 from "./features/Login/LoginPage4";
import FinalyPage from "./features/Login/LoginFinalPage";
import ProjectsMainPage from "./pages/AddProjects/ProjectsMainPage";
import AddProjects from "./pages/AddProjects/AddProjects";
import AppRouter from "./routes/AppRouter";

import "./components/styles/global.css";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    if (loggedIn === "true") setIsLoggedIn(true);
    setProjects(storedProjects);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <div className="layout">
          <Sidebar onLogout={handleLogout} />
          <div className="main">
            <Header />
            <AppRouter />
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />

              <Route
                path="/projects"
                element={
                  projects.length > 0 ? (
                    <ProjectsMainPage projects={projects} />
                  ) : (
                    <AddProjects setProjects={setProjects} />
                  )
                }
              />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<Login onLogin={() => setIsLoggedIn(true)} />}
          />
          <Route path="/page1" element={<LoginPage1 />} />
          <Route path="/page2" element={<LoginPage2 />} />
          <Route path="/page3" element={<LoginPage3 />} />
          <Route path="/page4" element={<LoginPage4 />} />
          <Route path="/FinalPage" element={<FinalyPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
