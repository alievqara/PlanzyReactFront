import React from "react";

const PricingSection = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-header-block">
          <h2 className="pricing-title">Тарифы для любого бизнеса</h2>
          <p className="pricing-desc">Выберите подходящий тарифный план и начните прямо сейчас</p>
        </div>
        <div className="pricing-cards-grid">
          {/* Starter Plan */}
          <div className="pricing-card">
            <div className="pricing-card-top">
              <span className="plan-icon">🌙</span>
              <span className="plan-name">Базовый</span>
            </div>
            <div className="plan-price-block">
              <span className="plan-price">₽0</span>
              <span className="plan-period">/мес</span>
            </div>
            <span className="plan-desc">Идеально для одного пользователя</span>
            <ul className="plan-feature-list">
              <li>1 пользователь</li>
              <li>Запись через Telegram</li>
              <li>Базовая панель</li>
              <li>Поддержка по email</li>
            </ul>
            <a href="#contact" className="plan-btn">Начать <span className="plan-btn-arrow">→</span></a>
            <div className="plan-note">Без скрытых платежей</div>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card pricing-card--active">
            <div className="pricing-card-top">
              <span className="plan-icon">💎</span>
              <span className="plan-name">Pro</span>
            </div>
            <div className="plan-price-block">
              <span className="plan-price">₽990</span>
              <span className="plan-period">/мес</span>
            </div>
            <span className="plan-desc">Для малых бизнесов</span>
            <ul className="plan-feature-list">
              <li>До 5 сотрудников</li>
              <li>Расписание и услуги</li>
              <li>Авто-напоминания</li>
              <li>Аналитика и отчёты</li>
            </ul>
            <a href="#contact" className="plan-btn plan-btn--active">Выбрать Pro <span className="plan-btn-arrow">→</span></a>
            <div className="plan-note">Без скрытых платежей</div>
          </div>

          {/* Business Plan */}
          <div className="pricing-card">
            <div className="pricing-card-top">
              <span className="plan-icon">⚡</span>
              <span className="plan-name">Бизнес</span>
            </div>
            <div className="plan-price-block">
              <span className="plan-price">₽2990</span>
              <span className="plan-period">/мес</span>
            </div>
            <span className="plan-desc">Для крупных компаний</span>
            <ul className="plan-feature-list">
              <li>Безлимит сотрудников</li>
              <li>Персональный домен</li>
              <li>Все функции Pro</li>
              <li>Поддержка 24/7</li>
            </ul>
            <a href="#contact" className="plan-btn">Оформить <span className="plan-btn-arrow">→</span></a>
            <div className="plan-note">Без скрытых платежей</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
