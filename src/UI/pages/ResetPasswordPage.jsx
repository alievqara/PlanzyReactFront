import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!password || !confirm) {
      setMessage("Пожалуйста, заполните все поля.");
      return;
    }

    if (password !== confirm) {
      setMessage("Пароли не совпадают.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://localhost:7264/api/auth/user/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword: password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Ошибка.");
      } else {
        setMessage("✅ Пароль успешно обновлен!");
        setTimeout(() => navigate("/signin"), 1500);
      }
    } catch (error) {
      setMessage("Ошибка сервера.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <h2>Новый пароль</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="Новый пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Повторите пароль"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Сброс..." : "Сбросить пароль"}
        </button>
        {message && <p className="error">{message}</p>}
      </form>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
