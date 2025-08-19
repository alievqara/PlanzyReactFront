import React from "react";
import { FiLogOut } from "react-icons/fi";
import "../../style/Sidebar.css";

const SidebarUserPanel = ({ user, onLogout, isCollapsed }) => {
  if (isCollapsed) {
    return (
      <div className="sidebar-user-panel collapsed">
        <img
          src={user.avatarUrl}
          alt="Аватар"
          className="user-avatar-collapsed"
          title={user.fullName}
        />
        {/* Collapse modunda sadece avatar ve tıklandığında profile yönlendirme */}
        <div className="user-info collapsed-info" onClick={() => window.location.href = "/profile"} title={user.fullName}>
          <span>{user.fullName}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="sidebar-user-panel expanded">
      <div className="user-info">
        {/* Avatar ve kullanıcı bilgisi */}
        <img src={user.avatarUrl} alt="Аватар" className="user-avatar" />
        
        <div className="user-text">
          <div className="user-name">{user.fullName}</div>
          <div className="user-username">@{user.username}</div>
        </div>
      </div>

      {/* Sağ tarafta Logout butonu */}
      <div className="logout-container">
        <button className="logout-btn" onClick={onLogout}>
          <FiLogOut className="logout-icon" />
        </button>
      </div>
    </div>
  );
};

export default SidebarUserPanel;
