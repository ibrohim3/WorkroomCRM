import React from "react";
import "./Header.css";
import notif from "../../assets/icons/notifications.png";
import user from "../../assets/icons/user-image.svg";
export default function Header() {
  return (
    <header className="main-header">
      <input type="text" className="search-inp" placeholder="Search" />
      <div className="header-right">
        <button className="notif-btn">
          <img src={notif} alt="Notification button image" />
        </button>
        <div className="user">
          <img src={user} alt="user avatar" className="avatar" />
          <span className="name">Evan Yates</span>
        </div>
      </div>
    </header>
  );
}
