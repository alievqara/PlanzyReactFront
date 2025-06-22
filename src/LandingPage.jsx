import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const [language, setLanguage] = useState("ru");
  const [showInfo, setShowInfo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLangChange = (lang) => setLanguage(lang);

  const toggleInfo = () => setShowInfo(!showInfo);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSignup = () => navigate("/signup");
  const goToLogin = () => navigate("/signin");

  return (
    <div className="landing-container">

      {/* Üstte Giriş/Kayıt Butonları */}
      <div className="auth-buttons">
        <button className="login-btn" onClick={goToLogin}>Войти</button>
        <button className="signup-btn" onClick={goToSignup}>Зарегистрироваться</button>
      </div>

      {/* Ana İçerik */}
      <div className="main-content">
        <h1 className="brand-text">Planzy</h1>
        <h2 className="headline">
          {language === "ru"
            ? "Управляйте временем. Развивайте свой бизнес."
            : "Manage your time. Grow your business."}
        </h2>

        {/* Sosyal Medya Butonları */}
        <div className="social-media-buttons">
          <a href="https://t.me/planzybot" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href="https://www.instagram.com/planzy.ru" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/+79276536666" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
      {/* Footer */}
      <div className="footer">© 2025 ByteCraft — hello@planzy.ru</div>

     
    </div>
  );
};

export default LandingPage;
