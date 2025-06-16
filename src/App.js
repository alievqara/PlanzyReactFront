// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Register from "./Register";  // Register.jsx dosyasını import ettik
import Login from "./Login";        // Login.jsx dosyasını import ettik

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Register />} />  {/* Register.jsx */}
        <Route path="/login" element={<Login />} />      {/* Login.jsx */}
        <Route path="/" exact element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
