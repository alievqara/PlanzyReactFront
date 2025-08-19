// System/pages/dashboard/components/ActionButtons.jsx

import React from "react";
import "../style/ActionButtons.css";

const ActionButtons = () => {
  return (
    <div className="dashboard-actions">
      <button className="dashboard-button">➕ Новая запись</button>
      <button className="dashboard-button">🛠 Добавить услугу</button>
      <button className="dashboard-button">👥 Пригласить сотрудника</button>
    </div>
  );
};

export default ActionButtons;
