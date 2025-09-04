import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import './components/styles/global.css';
import './App.css';
import AppRouter from './routes/AppRouter';
import MainLogin from './features/Login/MainLogin';
export default function App() {
  // const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  // const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const loggedIn = localStorage.getItem('isLoggedIn');
  //   if (loggedIn === 'true') {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const handleLogin = (email, password) => {
  //   if (email === 'admin@gmail.com' && password === 'admin') {
  //     setIsLoggedIn(true);
  //     localStorage.setItem('isLoggedIn', 'true');
  //   } else {
  //     alert('❌ Login yoki parol xato!');
  //   }
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   localStorage.removeItem('isLoggedIn');
  //   navigate("/Login");
  // };

  // if (!isLoggedIn) {
  //   return <Login onLogin={handleLogin} />;
  // }

  return (
    <div className="app">
      {/* <BrowserRouter> */}
      {/* <Sidebar /> */}
      {/* <Sidebar onLogout={handleLogout} /> */}
      <div className="main">
        {/* <Header /> */}
        {/* <AppRouter /> */}
        <MainLogin />
        <div className="main-content">
          {/* <ProjectDetails /> */}
          {/* <TasksSection onAddTask={() => setIsTaskModalOpen(true)} /> */}
        </div>
      </div>
      {/* </BrowserRouter> */}

      {/* Modals */}
      {/* {isTaskModalOpen && (
        <AddTaskModal onClose={() => setIsTaskModalOpen(false)} />
      )}
      {isProjectModalOpen && (
        <AddProjectModal onClose={() => setIsProjectModalOpen(false)} />
      )} */}
    </div>
  );
}
