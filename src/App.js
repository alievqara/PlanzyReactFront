import React from "react";
import { Routes, Route } from "react-router-dom";

// ✅ UI Pages
import LandingPage from "./UI/pages/LandingPage";
import LoginPage from "./UI/pages/LoginPage";
import RegisterPage from "./UI/pages/RegisterPage";
import ForgotPasswordPage from "./UI/pages/ForgotPasswordPage";
import ResetPasswordPage from "./UI/pages/ResetPasswordPage";
import VerifyEmailPage from "./UI/pages/VerifyEmailPage";
import EmailSentPage from "./UI/pages/EmailSentPage";
import TwoFactorPage from "./UI/pages/TwoFactorPage";


// ✅ Dashboard System Layout & Pages
import NotFoundPage from "./System/components/NotFoundPage";
import DashboardLayout from "./System/layout/DashboardLayout";
import DashboardHome from "./System/pages/DashboardHome";

// ✅ Global Styles
import "./UI/style/landing.css"; // UI stilleri
import "./System/style/Base.css"; // Eğer varsa dashboard stilleri
import "./System/style/Colors.css"; // Eğer varsa dashboard stilleri

function App() {
  return (
    <Routes>
      {/* === UI Routes === */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="/email-sent" element={<EmailSentPage />} />
      <Route path="/2fa" element={<TwoFactorPage />} />

      {/* === Dashboard Layout & Subroutes === */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} /> {/* /dashboard */}
        <Route path="*" element={<NotFoundPage />} />
        



        {/* 🔜 Diğer sayfalar (services, analytics vs.) buraya eklenecek */}
      </Route>
    </Routes>
  );
}

export default App;
