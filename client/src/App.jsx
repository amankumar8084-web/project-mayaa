import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}


export default App;