// SocialLoginButtons.jsx
import React from "react";
import { FaGoogle, FaApple, FaVk } from "react-icons/fa";

const SocialLoginButtons = () => {
  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    alert(`Şu an ${provider} ile giriş sistemi aktif değil :)`);
  };

  return (
    <div className="social-login-buttons">
      <p className="social-login-title">или войдите с помощью</p>
      <div className="social-button-group">
        <button className="social-btn google" onClick={() => handleSocialLogin("Google")}>
          <FaGoogle /> 
        </button>
        <button className="social-btn apple" onClick={() => handleSocialLogin("Apple")}>
          <FaApple /> 
        </button>
        <button className="social-btn vk" onClick={() => handleSocialLogin("VK")}>
          <FaVk /> 
        </button>
      </div>
    </div>
  );
};

export default SocialLoginButtons;
