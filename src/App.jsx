import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import ProjectDetails from './components/projectDetails/ProjectDetails';
import TasksSection from './components/taskSection/TasksSection';
import AddTaskModal from './components/addTaskModal/AddTaskModal';
import AddProjectModal from './components/addProjectModal/AddProjectModal';
import Login from './pages/Login/Login';
import './components/styles/global.css';
import Calendar from './pages/calendar/Calendar';
import Dashboard from './pages/dashboard/Dashboard';
import './App.css';
export default function App() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === 'admin') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      alert('❌ Login yoki parol xato!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <Sidebar onLogout={handleLogout} />
      {/* Main content */}
      <div className="main">
        <Header />
        {/* <Calendar /> */}
        <Dashboard />
        <div className="main-content">
          {/* <ProjectDetails /> */}
          {/* <TasksSection onAddTask={() => setIsTaskModalOpen(true)} /> */}
        </div>
      </div>

      {/* Modals */}
      {isTaskModalOpen && (
        <AddTaskModal onClose={() => setIsTaskModalOpen(false)} />
      )}
      {isProjectModalOpen && (
        <AddProjectModal onClose={() => setIsProjectModalOpen(false)} />
      )}
    </div>
  );
}
