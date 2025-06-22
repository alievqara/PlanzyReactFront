import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLoginButtons from "../components/SocialLoginButtons";
import "./Auth.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // 🧠 Валидация
    if (!username || !email || !password || !confirmPassword) {
      setMessage("Пожалуйста, заполните все поля.");
      return;
    }

    if (username.length < 3) {
      setMessage("Имя пользователя должно содержать минимум 3 символа.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Введите корректный адрес электронной почты.");
      return;
    }

    if (password.length < 6) {
      setMessage("Пароль должен содержать минимум 6 символов.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Пароли не совпадают.");
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch("https://localhost:7264/api/auth/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          telegramId: null,
        }),
      });

      if (response.ok) {
        setMessage("✅ Регистрация прошла успешно! Переадресация на страницу входа...");
        setTimeout(() => navigate("/signin"), 1500);
      } else {
        try {
          const data = await response.json();
          setMessage(data.message || "Произошла ошибка.");
        } catch {
          const errorText = await response.text();
          setMessage(errorText || "Произошла ошибка.");
        }
      }
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      setMessage("Не удалось подключиться к серверу.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Регистрация</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

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

          <input
            type="password"
            placeholder="Повторите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Регистрируем..." : "Зарегистрироваться"}
          </button>
        </form>

        {message && <div className="auth-message">{message}</div>}

        <div className="auth-options">
          <p>
            Уже есть аккаунт? <Link to="/signin">Войти</Link>
          </p>
        </div>

        <SocialLoginButtons />
      </div>
    </div>
  );
};

export default RegisterPage;
