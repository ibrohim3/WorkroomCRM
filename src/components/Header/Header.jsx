import React from 'react';

export default function Header() {
  return (
    <header className="main-header">
      <input type="text" placeholder="Search" />
      <div className="user">
        <img src="/user-avatar.jpg" alt="user" className="avatar" />
        <span className="name">Evan Yates</span>
      </div>
    </header>
  );
}
