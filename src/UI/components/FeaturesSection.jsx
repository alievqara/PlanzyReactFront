import React from "react";

const features = [
  {
    icon: "📅",
    title: "Онлайн-запись",
    desc: "Ваши клиенты могут записываться онлайн в любое время.",
  },
  {
    icon: "🛠️",
    title: "Управление услугами",
    desc: "Настраивайте длительность, цену и категории своих услуг.",
  },
  {
    icon: "👥",
    title: "Сотрудники",
    desc: "Добавляйте и управляйте своими сотрудниками.",
  },
  {
    icon: "🔔",
    title: "Уведомления",
    desc: "Напоминания клиентам через Telegram и email.",
  },
  {
    icon: "🌍",
    title: "Мультиязычность",
    desc: "Поддержка русского, турецкого и английского языков.",
  },
  {
    icon: "🤖",
    title: "Интеграция с Telegram",
    desc: "Полная автоматизация через Planzy бот.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="features-header-block">
          <h2 className="features-title">Основные возможности</h2>
          <p className="features-desc">Мы разработали платформу, которая помогает автоматизировать и упростить работу бизнеса.</p>
        </div>
        <div className="features-cards-grid">
          {features.map((item, index) => (
            <div key={index} className="feature-card-block">
              <div className="feature-icon-block">{item.icon}</div>
              <h3 className="feature-card-title">{item.title}</h3>
              <p className="feature-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
