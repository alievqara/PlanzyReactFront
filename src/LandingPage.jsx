// src/LandingPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // useNavigate kullanacağız
import "./LandingPage.css";  // CSS dosyasını import ettik

const LandingPage = () => {
  const [language, setLanguage] = useState("ru");
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();  // useNavigate hook'unu kullanıyoruz

  // Dil değiştirme işlemi
  const handleLangChange = (lang) => setLanguage(lang);

  // Hakkımızda kutusunun açılıp kapanmasını kontrol etme
  const toggleInfo = () => setShowInfo(!showInfo);

  // Buton tıklama işlemleri
  const goToSignup = () => {
    navigate("/signup");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="landing-container">

      {/* Sol Üstte Info Butonu */}
      <div className="info-button" onClick={toggleInfo}>
        i
      </div>

      {/* Sağ Üstte Dil Seçici */}
      <div className="language-switcher">
        <button
          className={`lang-btn ${language === "en" ? "active" : ""}`}
          onClick={() => handleLangChange("en")}
        >
          EN
        </button>
        <button
          className={`lang-btn ${language === "ru" ? "active" : ""}`}
          onClick={() => handleLangChange("ru")}
        >
          RU
        </button>
      </div>

      {/* Marka */}
      <h1 className="brand-text">Planzy</h1>

      {/* Sloganlar */}
      {language === "ru" ? (
        <>
          <h2 className="headline">
            Управляйте временем.<br />Развивайте свой бизнес.
          </h2>
          <div className="cta-buttons">
            <button className="btn primary" onClick={goToSignup}>Регистрация</button>
            <button className="btn ghost" onClick={goToLogin}>Войти</button>
          </div>
        </>
      ) : (
        <>
          <h2 className="headline">
            Manage your time.<br />Grow your business.
          </h2>
          <div className="cta-buttons">
            <button className="btn primary" onClick={goToSignup}>Sign Up</button>
            <button className="btn ghost" onClick={goToLogin}>Log In</button>
          </div>
        </>
      )}

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

      {/* Footer */}
      <div className="footer">© 2025 ByteCraft — hello@planzy.ru</div>

      {/* Hakkımızda Kutusu */}
      {showInfo && (
        <div className="info-box">
          <p>
            Planzy, küçük işletmelerin zaman yönetimi ve müşteri etkileşimini kolaylaştırmak için oluşturulmuş bir sistemdir.
            <br /><br />
            Basit arayüzü ve güçlü rezervasyon yapısı ile işinizi büyütmenize yardımcı olur.
          </p>
          <button className="close-info" onClick={toggleInfo}>Kapat</button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
