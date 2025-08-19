import React, { useEffect, useState } from "react";
import "../../style/Modal.css";

const ServiceModal = ({ service, onClose, onSave }) => {
  const [form, setForm] = useState({
    name: "",
    duration: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    setForm(service || { name: "", duration: "", price: "", description: "" });
  }, [service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, id: service?.id });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3>{service ? "Редактировать услугу" : "Добавить услугу"}</h3>
        <form onSubmit={handleSubmit} className="tab-form">
          <div className="form-group">
            <label>Название</label>
            <input name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Длительность (мин.)</label>
            <input name="duration" value={form.duration} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Цена (₽)</label>
            <input name="price" value={form.price} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Описание</label>
            <textarea name="description" value={form.description} onChange={handleChange} />
          </div>
          <div className="form-actions">
            <button type="submit" className="save-button">Сохранить</button>
            <button type="button" className="check-button" onClick={onClose}>Отмена</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceModal;
