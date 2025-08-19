import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Wrapper from "../wrappers/BaseWrapper";
import "../style/Colors.css";  // Colors.css dosyasını import ediyoruz

const DashboardLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);  // Varsayılan olarak dark mode

  useEffect(() => {
    // Dark mode ve light mode geçişi için class'ı html elementine ekliyoruz
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);  // Tema değişimini tetikliyoruz
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <Sidebar />

      {/* Sağ taraf (Wrapper) */}
      <Wrapper />
    </div>
  );
};

export default DashboardLayout;
