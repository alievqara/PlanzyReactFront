import React from "react";
import { FiLoader } from "react-icons/fi";

const LoadingScreen = ({ text = "Загрузка..." }) => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Dönen ikon */}
        <FiLoader className="loading-icon" />
        
        {/* Yükleme metni */}
        <p className="loading-text">{text}</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
