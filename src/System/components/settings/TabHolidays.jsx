// System/components/settings/TabHolidays.jsx

import React, { useState } from "react";
import "../../style/CompanySettings.css";

const TabHolidays = () => {
  const [customDates, setCustomDates] = useState([]);
  const [newDate, setNewDate] = useState("");
  const [newNote, setNewNote] = useState("");

  const [weeklyDaysOff, setWeeklyDaysOff] = useState([]);

  const toggleWeeklyDay = (day) => {
    setWeeklyDaysOff((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const handleAddCustomDate = () => {
    if (newDate.trim() !== "") {
      setCustomDates([
        ...customDates,
        { date: newDate, note: newNote || "Без названия" },
      ]);
      setNewDate("");
      setNewNote("");
    }
  };

  const handleDeleteCustomDate = (index) => {
    const updated = [...customDates];
    updated.splice(index, 1);
    setCustomDates(updated);
  };

  return (
    <div className="tab-holidays">
      <h3>🎉 Праздники и выходные</h3>

      {/* Haftalık Günler */}
      <div className="section">
        <h4>📅 Регулярные выходные</h4>
        <div className="days-checkboxes">
          {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, i) => (
            <label key={i} className="day-checkbox">
              <input
                type="checkbox"
                checked={weeklyDaysOff.includes(day)}
                onChange={() => toggleWeeklyDay(day)}
              />
              {day}
            </label>
          ))}
        </div>
      </div>

      {/* Özel Günler */}
      <div className="section">
        <h4>📆 Специальные даты</h4>
        <div className="custom-date-form">
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Описание"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <button className="save-button" onClick={handleAddCustomDate}>
            ➕ Добавить
          </button>
        </div>

        <ul className="custom-date-list">
          {customDates.map((item, index) => (
            <li key={index} className="custom-date-item">
              <span>{item.date} — {item.note}</span>
              <button onClick={() => handleDeleteCustomDate(index)}>🗑️</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabHolidays;
