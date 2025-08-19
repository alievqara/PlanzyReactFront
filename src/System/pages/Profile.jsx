import React, { useState, useEffect } from "react";
import "../style/Profile.css"; // İstersen bunu artık base.css ile birleştirebiliriz
import "../layout/BaseWrapper"
import BaseWrapper from "../layout/BaseWrapper";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 🧪 Demo veri (API bağlanınca burası değişecek)
    const demoUser = {
      avatar: "/images/user-04.png",
      firstName: "Айгюн",
      lastName: "Исмаилова",
      userName: "aigyun",
      email: "aigyun@example.com",
      isEmailVerified: true,
      phoneNumber: "+994501234567",
      role: "Администратор",
      company: "Planzy Beauty Studio",
      registeredAt: "2025-07-20",
      lastLoginAt: "2025-08-05 14:30",
      lastLoginIp: "192.168.1.10",
    };
    setUser(demoUser);
  }, []);

  if (!user) return <div className="module-wrapper">Загрузка...</div>;

  return (
    <BaseWrapper>
    <div className="module-wrapper">
      <h2>Мой профиль</h2>

      {/* Profil Başlığı */}
      <div className="profile-header" style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
        <img src={user.avatar} alt="Avatar" className="profile-avatar" style={{ width: 90, height: 90, borderRadius: "50%", border: "2px solid var(--accent)" }} />
        <div>
          <h3 style={{ margin: 0 }}>{user.firstName} {user.lastName}</h3>
          <p className="profile-role" style={{ color: "var(--accent)", margin: "0.2rem 0" }}>{user.role}</p>
          <p className="profile-username" style={{ opacity: 0.8 }}>@{user.userName}</p>
        </div>
      </div>

      {/* Kişisel Bilgiler */}
      <div className="module-section">
        <h3>Личная информация</h3>

        <div className="module-field">
          <strong>Email</strong>
          <span>
            {user.email}{" "}
            {user.isEmailVerified ? (
              <span style={{ color: "var(--accent)", fontWeight: "bold" }}>✔ Подтвержден</span>
            ) : (
              <span style={{ color: "var(--danger)", fontWeight: "bold" }}>✘ Не подтвержден</span>
            )}
          </span>
        </div>

        <div className="module-field">
          <strong>Телефон</strong>
          <span>{user.phoneNumber || <span className="module-missing">—</span>}</span>
        </div>

        <div className="module-field">
          <strong>Компания</strong>
          <span>{user.company}</span>
        </div>

        <div className="module-field">
          <strong>Дата регистрации</strong>
          <span>{user.registeredAt}</span>
        </div>

        <div className="module-field">
          <strong>Последний вход</strong>
          <span>{user.lastLoginAt} ({user.lastLoginIp})</span>
        </div>
      </div>
    </div>
    </BaseWrapper>
  );
};

export default Profile;
