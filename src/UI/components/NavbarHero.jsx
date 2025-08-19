import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoPlanzy }  from "../../assets/LogoPlanzy.svg"; 


const MENU = [
  {
    label: "Возможности",
    dropdown: [
      { label: "Онлайн-запись", link: "#features-booking" },
      { label: "Услуги", link: "#features-services" },
      { label: "Сотрудники", link: "#features-staff" },
      { label: "Уведомления", link: "#features-notifications" },
      { label: "Аналитика и отчеты", link: "#features-reports" },
      { label: "Интеграции", link: "#features-integration" },
    ],
  },
  {
    label: "Для кого",
    dropdown: [
      { label: "Салоны красоты" },
      { label: "Массажисты" },
      { label: "Тату-мастера" },
      { label: "Психологи" },
      { label: "Клиники и стоматологии" },
      { label: "Детские центры" },
    ],
  },
  {
    label: "Цены",
    dropdown: [
      { label: "Базовый" },
      { label: "Pro" },
      { label: "Бизнес" },
    ],
  },
  {
    label: "Поддержка",
    dropdown: [
      { label: "Частые вопросы" },
      { label: "Инструкции" },
      { label: "Telegram поддержка" },
      { label: "Связаться с нами" },
    ],
  },
  {
    label: "О нас",
    dropdown: [
      { label: "О компании" },
      { label: "Наша команда" },
      { label: "Вакансии" },
      { label: "Правовая информация" },
    ],
  },
];

export default function NavbarHero() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({});
  const [desktopDropdown, setDesktopDropdown] = useState(null);

  const toggleDrawer = () => setDrawerOpen((v) => !v);
  const handleMobileDropdown = (idx) =>
    setMobileDropdown((prev) => ({ ...prev, [idx]: !prev[idx] }));
  const handleDesktopDropdown = (idx) => setDesktopDropdown(idx);
  const clearDesktopDropdown = () => setDesktopDropdown(null);

  return (
    <header className="top-section">
      <nav className="navbar-hero sticky-navbar container" aria-label="Главная навигация">

        <a href="#" className="navbar-hero-logo-block" aria-label="Planzy homepage">
          <LogoPlanzy/>
        </a>

        <ul className="navbar-hero-menu">
          {MENU.map((item, idx) =>
            item.dropdown ? (
              <li
                key={item.label}
                className="navbar-hero-menu-item has-dropdown"
                onMouseEnter={() => handleDesktopDropdown(idx)}
                onMouseLeave={clearDesktopDropdown}
              >
                <button
                  className="navbar-hero-link"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={desktopDropdown === idx}
                >
                  {item.label}
                  <span className="navbar-hero-caret">▾</span>
                </button>
                <ul className={`navbar-hero-dropdown-menu${desktopDropdown === idx ? " dropdown-open" : ""}`}>
                  {item.dropdown.map((sub) => (
                    <li key={sub.label}>
                      <a href={sub.link || "#"} className="navbar-hero-dropdown-link">
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label} className="navbar-hero-menu-item">
                <a href={item.link} className="navbar-hero-link">
                  {item.label}
                </a>
              </li>
            )
          )}
          <li className="navbar-hero-menu-item">
            <Link to="/signin" className="navbar-hero-link navbar-hero-login">
              Войти
            </Link>
          </li>
          <li className="navbar-hero-menu-item">
            <Link to="/signup" className="navbar-hero-signup-btn">
              Зарегистрироваться
            </Link>
          </li>
        </ul>

        <button
          className={`navbar-hero-burger${drawerOpen ? " open" : ""}`}
          aria-label="Открыть меню"
          aria-expanded={drawerOpen}
          onClick={toggleDrawer}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-hero-drawer-backdrop${drawerOpen ? " open" : ""}`} onClick={toggleDrawer} />
        <aside className={`navbar-hero-drawer${drawerOpen ? " open" : ""}`}>
          <div className="navbar-hero-drawer-header">
            <a href="#" className="navbar-hero-logo-block" onClick={toggleDrawer}>
              <img src="/images/LogoPlanzy.svg" alt="Planzy logo" className="navbar-hero-logo-img" />
              <span className="navbar-hero-logo-text"></span>
            </a>
            <button className="navbar-hero-drawer-close" onClick={toggleDrawer}>×</button>
          </div>
          <ul className="navbar-hero-drawer-menu">
            {MENU.map((item, idx) =>
              item.dropdown ? (
                <li key={item.label} className="navbar-hero-drawer-item">
                  <button
                    className="navbar-hero-drawer-link"
                    onClick={() => handleMobileDropdown(idx)}
                    aria-expanded={!!mobileDropdown[idx]}
                  >
                    {item.label}
                    <span className={`navbar-hero-caret${mobileDropdown[idx] ? " open" : ""}`}>▾</span>
                  </button>
                  <ul className={`navbar-hero-drawer-dropdown${mobileDropdown[idx] ? " open" : ""}`}>
                    {item.dropdown.map((sub) => (
                      <li key={sub.label}>
                        <a href={sub.link || "#"} className="navbar-hero-drawer-sublink" onClick={toggleDrawer}>
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label} className="navbar-hero-drawer-item">
                  <a href={item.link} className="navbar-hero-drawer-link" onClick={toggleDrawer}>
                    {item.label}
                  </a>
                </li>
              )
            )}
            <li className="navbar-hero-drawer-item">
              <Link to="/signin" className="navbar-hero-drawer-link navbar-hero-login" onClick={toggleDrawer}>
                Войти
              </Link>
            </li>
            <li className="navbar-hero-drawer-item">
              <Link to="/signup" className="navbar-hero-signup-btn" onClick={toggleDrawer}>
                Зарегистрироваться
              </Link>
            </li>
          </ul>
        </aside>
      </nav>

      {/* Hero content alanı (değişmedi) */}
      <div className="hero-content">
        <h1 className="hero-heading" style={{ fontSize: '3.2rem', lineHeight: 1.1, marginBottom: '1.2rem' }}>
          Управляйте своим бизнесом <br />
          <span style={{ color: '#a78bfa' }}>легко и современно</span>
        </h1>
        <p className="hero-text" style={{ fontSize: '1.25rem', color: '#e0e0e0', marginBottom: '2.2rem' }}>
          Онлайн-записи, управление услугами и сотрудниками, напоминания клиентам — всё в одном месте. <br />
          <span style={{ color: '#a78bfa' }}>Planzy</span> — ваш цифровой помощник для роста бизнеса.
        </p>
        <a href="#contact" className="hero-btn" style={{
          fontSize: '1.15rem',
          padding: '1rem 2.5rem',
          boxShadow: '0 4px 24px #7c3aed55',
          transition: 'transform 0.2s',
          fontWeight: 700
        }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.07)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          🚀 Запросить демо
        </a>
        <div className="hero-image-wrapper">
          <img src="/images/hero.svg" alt="Hero Illustration" className="hero-img" />
        </div>
      </div>
    </header>
  );
}
