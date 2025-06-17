import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // useNavigate kullanacağız
import "./LandingPage.css";  // CSS dosyasını import ettik

const LandingPage = () => {
  const [language, setLanguage] = useState("ru");
  const [showInfo, setShowInfo] = useState(false);  // Info kutusunun görünür olup olmadığını kontrol ediyoruz
  const [menuOpen, setMenuOpen] = useState(false);  // Hamburger menüsü durumu
  const navigate = useNavigate();  // useNavigate hook'unu kullanıyoruz

  // Dil değiştirme işlemi
  const handleLangChange = (lang) => setLanguage(lang);

  // Info kutusunun açılıp kapanmasını kontrol etme
  const toggleInfo = () => setShowInfo(!showInfo);

  // Sayfa kaydırıldığında info kutusunu göster
  const handleScroll = () => {
    if (window.scrollY > 200) { // Sayfa belirli bir mesafeye kayarsa
      setShowInfo(true); // Info kutusunu aç
    } else {
      setShowInfo(false); // Info kutusunu kapat
    }
  };

  // Scroll event listener'ını ekle
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Scroll olduğunda handleScroll çalışacak

    // Cleanup: event listener'ı temizle
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Buton tıklama işlemleri
  const goToSignup = () => {
    navigate("/signup");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);  // Hamburger menüsünü açma/kapama

  return (
    <div className="landing-container">


      {/* Ana Sayfa İçeriği */}
      <div className="main-content">
        <h1 className="brand-text">Planzy</h1>
        <h2 className="headline">
          {language === "ru" ? "Управляйте временем. Развивайте свой бизнес." : "Manage your time. Grow your business."}
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

      {/* Hakkımızda Kutusu */}
      {showInfo && (
        <div className="info-box">
          <p>
            Planzy, küçük işletmelerin zaman yönetimi ve müşteri etkileşimini kolaylaştırmak için oluşturulmuş bir sistemdir.
            <br />
            <br />
            Basit arayüzü ve güçlü rezervasyon yapısı ile işinizi büyütmenize yardımcı olur.
          </p>
          <button className="close-info" onClick={toggleInfo}>
            Kapat
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
