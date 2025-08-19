import React, { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon, FiGlobe, FiUser, FiLogOut } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../style/Topbar.css";

const Topbar = ({ title = "Панель управления" }) => {
  const [lang, setLang] = useState("RU");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("light-mode", !newMode);
    document.documentElement.classList.toggle("dark-mode", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const handleLanguageToggle = () => {
    setLang((prev) => (prev === "RU" ? "EN" : "RU"));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/signin";
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    const dark = saved === "dark";
    setIsDarkMode(dark);
    document.documentElement.classList.add(dark ? "dark-mode" : "light-mode");
  }, []);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  return (
    <div className="topbar">
      <div className="topbar-left">
        <h2>{title}</h2>
      </div>

      <div className="topbar-right">
        <button className="topbar-icon-button" onClick={toggleTheme} title="Сменить тему">
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>

        <button className="topbar-icon-button" onClick={handleLanguageToggle} title="Сменить язык">
          <FiGlobe />
          <span className="lang-label">{lang}</span>
        </button>

  
        </div>
      </div>
  );
};

export default Topbar;
