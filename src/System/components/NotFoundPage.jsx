// System/components/NotFoundPage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/error.css";

const NotFoundPage = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className="notfound-wrapper">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-title">Страница не найдена</h2>
      <p className="notfound-message">{message || "Похоже, вы зашли не туда."}</p>
      <button className="notfound-button" onClick={() => navigate("/dashboard")}>
        Вернуться на главную
      </button>
    </div>
  );
};

export default NotFoundPage;
