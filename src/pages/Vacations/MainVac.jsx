import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import VacationsHead from "./VacationsHead";
import Vacations from "./Vacations";
import CalendarVacations from "./CalendarVacations";

function MainVac() {
  const navigate = useNavigate();

  function movePage() {
    navigate("/vacations/calendar-vacations"); // to‘liq path
  }

  function moveToEmployees() {
    navigate("/vacations"); // qaytish uchun
  }

  return (
    <div className="vacMain">
      <VacationsHead onMovePage={movePage} onMoveEmployees={moveToEmployees} />

      <Routes>
        <Route path="" element={<Vacations />} /> {/* Default page */}
        <Route path="calendar-vacations" element={<CalendarVacations />} />
      </Routes>
    </div>
  );
}

export default MainVac;
