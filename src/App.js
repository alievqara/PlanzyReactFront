// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import CreateBusinessPage from "./pages/CreateBusinessPage";
import DashboardPage from "./pages/DashboardPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create-business" element={<CreateBusinessPage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

      </Routes>
    </Router>
  );
}

export default App;

