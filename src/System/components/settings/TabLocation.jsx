// System/components/settings/TabLocation.jsx

import React, { useState } from "react";
import "../../style/CompanySettings.css";


const TabLocation = () => {
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSave = () => {
    // Burada backend'e gönderilecek veri
    console.log({ address, latitude, longitude });
  };

  return (
    <div className="tab-location">
      <h3>📍 Локация</h3>

      <div className="form-group">
        <label>Адрес</label>
        <input
          type="text"
          placeholder="Например: ул. Ленина, 10, Москва"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="form-coordinates">
        <div className="form-group">
          <label>Широта (Latitude)</label>
          <input
            type="text"
            placeholder="Например: 55.7558"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Долгота (Longitude)</label>
          <input
            type="text"
            placeholder="Например: 37.6176"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
      </div>

      <button className="save-button" onClick={handleSave}>
        Сохранить локацию
      </button>
    </div>
  );
};

export default TabLocation;
