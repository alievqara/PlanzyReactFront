import React from "react";
import AuthLayout from "../layout/AuthLayout";

const EmailSentPage = () => {
  return (
    <AuthLayout>
      <h2>Письмо отправлено!</h2>
      <p>Пожалуйста, проверьте свою почту и следуйте инструкциям, чтобы продолжить.</p>
    </AuthLayout>
  );
};

export default EmailSentPage;
