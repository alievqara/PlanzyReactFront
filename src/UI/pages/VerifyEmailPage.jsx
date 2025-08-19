import React from "react";

const VerifyEmailPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Подтверждение электронной почты</h2>
        <p>Мы отправили письмо с подтверждением на вашу почту. Пожалуйста, проверьте свой ящик и нажмите на ссылку для подтверждения.</p>
        <p>Если вы не получили письмо, проверьте папку спам или <strong>запросите повторную отправку</strong>.</p>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
