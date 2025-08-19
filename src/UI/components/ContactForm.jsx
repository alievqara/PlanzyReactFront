import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header-block">
          <h2 className="contact-title">Связаться с нашей командой</h2>
          <p className="contact-desc">Заполните форму ниже, и мы свяжемся с вами для демонстрации возможностей Planzy.</p>
        </div>
        <div className="contact-form-block">
          <form className="contact-form-modern">
            <div className="contact-form-row">
              <input type="text" name="name" placeholder="Ваше имя" required className="contact-input" />
              <input type="email" name="email" placeholder="Email" required className="contact-input" />
            </div>
            <div className="contact-form-row">
              <textarea name="message" rows="5" placeholder="Сообщение (необязательно)" className="contact-input" />
            </div>
            <button type="submit" className="contact-btn">Отправить заявку</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
