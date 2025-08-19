import React, { useState } from "react";

const TwoFactorPage = () => {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // burada doğrulama API'sine istek gönderilir
    alert("Kod doğrulandı (şimdilik demo)");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Двухфакторная аутентификация</h2>
        <p>Введите 6-значный код, отправленный на ваш e-mail или телефон.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Введите код"
            maxLength="6"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <button type="submit">Подтвердить</button>
        </form>
      </div>
    </div>
  );
};

export default TwoFactorPage;
