import React, { useState } from "react";
import "./Header.css";
import "./modal.css";
import notif from "../../assets/icons/notifications.png";
import user from "../../assets/icons/user-image.svg";
import right from "/right.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <header className="main-header">
      <input type="text" className="search-inp" placeholder="Search" />
      <div className="header-right">
        <button className="ring">
          <img
            src={notif}
            className="animate"
            alt="Notification button image"
          />
        </button>
        <div className="user" onClick={() => setOpenModal(true)}>
          <img src={user} alt="user avatar" className="avatar" />
          <span className="name">Evan Yates</span>
          <img src={right} alt="button " width={24} height={24} />
        </div>
      </div>

      {/* Modal to‘g‘ridan-to‘g‘ri shu yerda */}
      {openModal && (
        <div className="modal-overlay" onClick={() => setOpenModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="links">
              <NavLink to="/my-profile">
                {/* <img
                  src="/user-inactive.svg"
                  alt="user icon"
                  width={24}
                  height={24}
                /> */}
                My Profile
              </NavLink>
              <NavLink to={"/notif"}>Notication</NavLink>
            </div>
            <button className="close-btn" onClick={() => setOpenModal(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
