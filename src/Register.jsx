// src/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";  // Ortak CSS dosyasını import ettik

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // Hata mesajı için state
  const navigate = useNavigate();  // useNavigate hook'u

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API'ye istek gönderiyoruz
      const response = await fetch("https://localhost:7016/api/User/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  // JSON formatında veri gönderiyoruz
        },
        body: JSON.stringify({
          email,  // Kullanıcıdan alınan e-posta
          password,  // Kullanıcıdan alınan şifre
          telegramId: null,  // Telegram ID şu an null olarak gönderiliyor
        }),
      });

      const data = await response.json();  // API'den dönen yanıtı alıyoruz

      if (response.ok) {
        // Kayıt başarılı ise giriş sayfasına yönlendiriyoruz
        navigate("/login");  // Kayıt sonrası login sayfasına yönlendir
      } else {
        // Hata durumu varsa, hata mesajını state'e kaydediyoruz
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong");
      console.error(err);  // Hata durumunda console'a yazdırıyoruz
    }
  };

  const goBack = () => {
    navigate(-1);  // Geri gitmek için
  };

  return (
    <div className="auth-container">
      <h2>Kayıt Ol</h2>
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
        <button type="submit">Kayıt Ol</button>
      </form>
      {error && <p className="error">{error}</p>}  {/* Hata mesajını gösteriyoruz */}
      <div className="footer">
        <p>Zaten hesabınız var mı? <a href="/login">Giriş yapın</a></p>
      </div>
      <button className="back-button" onClick={goBack}>Geri</button> {/* Geri Butonu */}
    </div>
  );
};

export default Register;
