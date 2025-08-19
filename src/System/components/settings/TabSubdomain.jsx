// System/components/settings/TabSubdomain.jsx

import React, { useState } from "react";
import "../../style/CompanySettings.css";

const TabSubdomain = () => {
  const [subdomain, setSubdomain] = useState("");
  const [available, setAvailable] = useState(null);

  const checkAvailability = () => {
    // TODO: API ile kontrol et
    console.log("Checking subdomain:", subdomain);
    setAvailable(true); // Geçici
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving subdomain:", subdomain);
  };

  return (
    <form className="tab-form" onSubmit={handleSave}>
      <div className="form-group">
        <label>Субдомен</label>
        <div className="subdomain-input-wrapper">
          <input
            type="text"
            value={subdomain}
            onChange={(e) => setSubdomain(e.target.value)}
            placeholder="example"
          />
          <span className="subdomain-suffix">.planzy.ru</span>
        </div>
        {available !== null && (
          <div className={`subdomain-status ${available ? "available" : "unavailable"}`}>
            {available ? "Доступно ✅" : "Недоступно ❌"}
          </div>
        )}
      </div>

      <button type="button" className="check-button" onClick={checkAvailability}>
        Проверить
      </button>

      <button type="submit" className="save-button">💾 Сохранить</button>
    </form>
  );
};

export default TabSubdomain;
