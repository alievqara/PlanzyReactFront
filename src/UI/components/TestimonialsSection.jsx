import React from "react";

const testimonials = [
  {
    name: "Алиева Гюльнара",
    role: "Владелец салона красоты",
    image: "/images/user-01.png",
    quote: "Planzy навёл порядок в моём бизнесе. Теперь каждый клиент записан, и я ничего не забываю.",
  },
  {
    name: "Наталья Смирнова",
    role: "Массажист",
    image: "/images/user-02.png",
    quote: "Раньше клиенты забывали о приёмах. Сейчас Planzy сам им напоминает!",
  },
  {
    name: "Иван Петров",
    role: "Директор студии йоги",
    image: "/images/user-03.png",
    quote: "Очень простой и понятный интерфейс. Команда довольна, клиенты довольны!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonials-header-block">
          <h2 className="testimonials-title">Отзывы наших клиентов</h2>
          <p className="testimonials-desc">Нам доверяют сотни предпринимателей по всей России.</p>
        </div>
        <div className="testimonials-cards-grid">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card-block">
              <div className="testimonial-avatar-block">
                <img src={item.image} alt={item.name} className="testimonial-avatar-img" />
              </div>
              <div className="testimonial-quote">“</div>
              <p className="testimonial-card-desc">{item.quote}</p>
              <div className="testimonial-card-name">{item.name}</div>
              <div className="testimonial-card-role">{item.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
