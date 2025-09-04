import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage1 from './LoginPage1';
import LoginPage2 from './LoginPage2';
import LoginPage3 from './LoginPage3';
import LoginPage4 from './LoginPage4';
import LoginFinal from './LoginFinalPage';
import Login from './Login';

function MainLogin() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='page1' element={<LoginPage1/>}/>
        <Route path='page2' element={<LoginPage2/>}/>
        <Route path='page3' element={<LoginPage3/>}/>
        <Route path='page4' element={<LoginPage4/>}/>
        <Route path='finalPage' element={<LoginFinal/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default MainLogin;