import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout"; // aynı layout
import SocialLoginButtons from "../components/SocialLoginButtons";

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

    if (!username || !email || !password || !confirmPassword) {
      setMessage("Пожалуйста, заполните все поля.");
      return;
    }

    if (username.length < 3) {
      setMessage("Имя пользователя должно содержать не менее 3 символов.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Пожалуйста, введите действительный адрес электронной почты.");
      return;
    }

    if (password.length < 6) {
      setMessage("Пароль должен содержать не менее 6 символов.");
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
          telegramId: null, // şimdilik boş
        }),
      });

      if (response.ok) {
        setMessage("✅ Регистрация успешна! Перенаправляем...");
        setTimeout(() => navigate("/signin"), 1500);
      } else {
        const data = await response.json();
        setMessage(data.message || "Произошла ошибка.");
      }
    } catch (error) {
      setMessage("Не удалось подключиться к серверу.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
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
        {message && <p className="error">{message}</p>}
      </form>

      <div className="auth-options">
        <p>
          Уже есть аккаунт? <Link to="/signin">Войти</Link>
        </p>
      </div>

      <SocialLoginButtons />
    </AuthLayout>
  );
};

export default RegisterPage;
