import React from "react";
import { Link, useNavigate } from "react-router-dom";
// Logo dosyasını import ile alıyoruz
import { ReactComponent as LogoPlanzy }  from "../../assets/LogoPlanzy.svg"; 

const AuthNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-navbar">
      <Link to="/" className="auth-navbar-logo">
      <LogoPlanzy/>
      </Link>
      <button className="auth-navbar-back" onClick={() => navigate(-1)}>
        ← Назад
      </button>
    </div>
  );
};

export default AuthNavbar;
