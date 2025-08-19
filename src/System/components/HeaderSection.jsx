// System/pages/dashboard/components/HeaderSection.jsx

import React from "react";
import "../style/HeaderSection.css";

const HeaderSection = ({ name, description }) => {
  return (
    <div className="dashboard-header">
      <h2>{name || "Название компании"}</h2>
      {description && <p className="subtitle">{description}</p>}
    </div>
  );
};

export default HeaderSection;
