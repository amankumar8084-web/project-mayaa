<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
=======
import { Routes, Route } from "react-router-dom";
>>>>>>> 2b10083f02f7945023b25dffc3c4633cd049f4a3
import LandingPage from './pages/LandingPage';
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;