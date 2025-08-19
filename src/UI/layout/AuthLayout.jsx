import React from "react";
import AuthNavbar from "../components/AuthNavbar";
import "../style/Auth.css"; // auth-container ve auth-box burada tanımlı

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <AuthNavbar />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
