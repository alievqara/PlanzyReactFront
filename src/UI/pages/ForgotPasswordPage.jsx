import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import SocialLoginButtons from "../components/SocialLoginButtons";


const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!email) {
      setMessage("Пожалуйста, введите ваш email.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://localhost:7264/api/auth/user/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Ошибка.");
      } else {
        setMessage("📨 Письмо с инструкциями отправлено на вашу почту.");
      }
    } catch (error) {
      setMessage("Ошибка сервера.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <h2>Восстановление пароля</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Электронная почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Отправка..." : "Отправить"}
        </button>
        {message && <p className="error">{message}</p>}
      </form>

      <div className="auth-options">
        <p>
          Вспомнили пароль? <Link to="/signin">Войти</Link>
        </p>
      </div>
      <SocialLoginButtons />
    </AuthLayout>
    
  );
};

export default ForgotPasswordPage;
