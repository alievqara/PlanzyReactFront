import React, { useState } from "react";
import "../../style/CompanySettings.css";

const days = [
  { key: "monday", label: "Понедельник" },
  { key: "tuesday", label: "Вторник" },
  { key: "wednesday", label: "Среда" },
  { key: "thursday", label: "Четверг" },
  { key: "friday", label: "Пятница" },
  { key: "saturday", label: "Суббота" },
  { key: "sunday", label: "Воскресенье" },
];

const TabSchedule = () => {
  const [schedule, setSchedule] = useState(
    days.map((day) => ({
      ...day,
      open: true,
      from: "09:00",
      to: "18:00",
    }))
  );

  const handleChange = (index, field, value) => {
    const updated = [...schedule];
    updated[index][field] = value;
    setSchedule(updated);
  };

  return (
    <div className="schedule-container">
      {schedule.map((day, idx) => (
        <div key={day.key} className="schedule-row">
          <label className="day-label">{day.label}</label>
          <input
            type="time"
            value={day.from}
            onChange={(e) => handleChange(idx, "from", e.target.value)}
            disabled={!day.open}
          />
          <span className="dash">—</span>
          <input
            type="time"
            value={day.to}
            onChange={(e) => handleChange(idx, "to", e.target.value)}
            disabled={!day.open}
          />
          <label className="switch">
            <input
              type="checkbox"
              checked={day.open}
              onChange={(e) => handleChange(idx, "open", e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default TabSchedule;
