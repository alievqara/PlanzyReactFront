// src/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // useNavigate kullanıyoruz
import "./Auth.css";  // Ortak CSS dosyasını import ettik

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // useNavigate hook'u

  const handleSubmit = (e) => {
    e.preventDefault();
    // API'ye istek gönderebilirsiniz
    console.log("Login successful");
  };

  const goBack = () => {
    navigate(-1);  // Geri gitmek için
  };

  return (
    <div className="auth-container">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
      <div className="footer">
        <p>Hesabınız yok mu? <a href="/signup">Kaydolun</a></p>
      </div>
      <button className="back-button" onClick={goBack}>Geri</button> {/* Geri Butonu */}
    </div>
  );
};

export default Login;
