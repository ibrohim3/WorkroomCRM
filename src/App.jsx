import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import MainLogin from "./features/Login/MainLogin";
import Login from "./features/Login/Login";
import AppRouter from "./routes/AppRouter";
import "./components/styles/global.css";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") setIsLoggedIn(true);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Agar login qilmagan foydalanuvchi */}
        {!isLoggedIn && (
          <>
            <Route
              path="/login"
              element={<Login onLogin={() => setIsLoggedIn(true)} />}
            />
            <Route path="/register/" element={<MainLogin />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}

        {/* Agar login qilgan foydalanuvchi */}
        {isLoggedIn && (
          <Route
            path="*"
            element={
              <div className="app">
                <Sidebar onLogout={handleLogout} />
                <div className="main">
                  <Header />
                  <AppRouter />
                </div>
              </div>
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}
