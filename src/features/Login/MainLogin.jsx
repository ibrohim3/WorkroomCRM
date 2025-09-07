import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import LoginPage1 from "./LoginPage1";
import LoginPage2 from "./LoginPage2";
import LoginPage3 from "./LoginPage3";
import LoginPage4 from "./LoginPage4";
import LoginFinal from "./LoginFinalPage";
import Login from "./Login";
import AppRouter from "../../routes/AppRouter";

function MainLogin() {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/page1" element={<LoginPage1 />} />
      <Route path="/page2" element={<LoginPage2 />} />
      <Route path="/page3" element={<LoginPage3 />} />
      <Route path="/page4" element={<LoginPage4 />} />
      <Route path="/finalPage" element={<LoginFinal />} />
      <Route path="/addProject" element={<AppRouter />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default MainLogin;
