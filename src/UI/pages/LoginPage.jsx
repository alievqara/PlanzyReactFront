import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout"; // yeni layout
import SocialLoginButtons from "../components/SocialLoginButtons";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!email || !password) {
      setMessage("Пожалуйста, заполните все поля.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://localhost:7264/api/auth/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Ошибка входа.");
      } else {
        localStorage.setItem("token", data.token || "");
        navigate("/dashboard");
      }
    } catch (error) {
      setMessage("Не удалось подключиться к серверу.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <h2>Вход в аккаунт</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Электронная почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Вход..." : "Войти"}
        </button>
        {message && <p className="error">{message}</p>}
      </form>

      <div className="auth-options">
        <Link to="/forgot-password">Забыли пароль?</Link>
        <p>
          Нет аккаунта? <Link to="/signup">Зарегистрироваться</Link>
        </p>
      </div>

      <SocialLoginButtons />
    </AuthLayout>
  );
};

export default LoginPage;
