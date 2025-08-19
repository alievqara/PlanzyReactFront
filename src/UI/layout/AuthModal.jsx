import React from "react";
import "../../style/AuthModal.css";

const AuthModal = ({ children, onClose }) => {
  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="auth-modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default AuthModal;
