import React from "react";

const ServiceSettings = () => {
  return (
    <div className="tab-content">
      <div className="services-header">
        <h3>Услуги</h3>
        <button className="add-service-button">➕ Добавить услугу</button>
      </div>

      <div className="services-list">
        {/* Her hizmet için bir kart gelecek */}
        <div className="service-card">
          <div className="service-info">
            <h4>Массаж спины</h4>
            <p>30 минут • ₽2000</p>
          </div>
          <div className="service-actions">
            <button>✏️</button>
            <button>🗑️</button>
          </div>
        </div>

        {/* Diğer hizmet kartları... */}
      </div>
    </div>
  );
};

export default ServiceSettings;
