import React from "react";
import "../../style/CompanySettings.css";

const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
  const handleDropdownChange = (e) => {
    onTabChange(e.target.value);
  };

  return (
    <div className="tab-nav-container">
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => onTabChange(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <select
        className="tab-dropdown"
        value={activeTab}
        onChange={handleDropdownChange}
      >
        {tabs.map((tab) => (
          <option key={tab.key} value={tab.key}>
            {tab.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TabNavigation;
