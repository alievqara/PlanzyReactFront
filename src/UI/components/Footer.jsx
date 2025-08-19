import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand-block">
        </div>
        <div className="footer-social-block">
          <a href="https://t.me/planzychannel" target="_blank" rel="noreferrer" className="footer-social-link"><i className="fab fa-telegram-plane"></i></a>
          <a href="https://www.instagram.com/planzy.ru" target="_blank" rel="noreferrer" className="footer-social-link"><i className="fab fa-instagram"></i></a>
          <a href="https://wa.me/+79276536666" target="_blank" rel="noreferrer" className="footer-social-link"><i className="fab fa-whatsapp"></i></a>
          <a href="mailto:hello@planzy.ru" target="_blank" rel="noreferrer" className="footer-social-link"><i className="fas fa-envelope"></i></a>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Planzy. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
