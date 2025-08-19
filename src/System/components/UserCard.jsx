// System/components/UserCard.jsx
import React from "react";
import { FiYoutube, FiUser, FiLogOut } from "react-icons/fi";
import { FaTiktok, FaGoogle } from "react-icons/fa";
import "../style/UserCard.css";

const UserCard = () => {
  const user = {
    name: "София Алексеева",
    role: "Менеджер",
    balance: "₽25,678",
    avatar: "/images/user-04.png", // avatar dosyan burada olacak
    connectedPlatforms: [
      { icon: <FiYoutube />, name: "YouTube", followers: "120K" },
      { icon: <FaTiktok />, name: "TikTok", followers: "85K" },
      { icon: <FaGoogle />, name: "Google", followers: "Linked" },
    ],
  };

  return (
    <div className="user-card">
      <div className="user-info">
        <img src={user.avatar} alt="Avatar" className="avatar" />
        <div className="user-meta">
          <h3>{user.name}</h3>
          <span>{user.role}</span>
        </div>
      </div>

      <div className="user-balance">
        <p>Bank Account</p>
        <h2>{user.balance}</h2>
        <small>Текущий счёт</small>
      </div>

      <div className="platforms">
        <p>Платформы</p>
        <ul>
          {user.connectedPlatforms.map((platform, index) => (
            <li key={index}>
              {platform.icon}
              <span>{platform.name}</span>
              <span className="followers">{platform.followers}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="logout-button">
        <FiLogOut /> Выйти
      </button>
    </div>
  );
};

export default UserCard;
