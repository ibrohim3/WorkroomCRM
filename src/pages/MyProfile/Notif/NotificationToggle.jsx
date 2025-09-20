import React, { useState } from "react";
import "./notification.css";

function NotificationToggle() {
  const [enabled, setEnabled] = useState(true);

  const handleToggle = () => {
    setEnabled((prev) => !prev);
  };

  return (
    <div className="notification">
      <h2>Notification</h2>
      <form className="notif-form">
        <label className="switch">
          <input type="checkbox" checked={enabled} onChange={handleToggle} />
          <span className="notif-slider"></span>
        </label>
        <p>
          Notifications are <b>{enabled ? "enabled" : "disabled"}</b>
        </p>
      </form>
    </div>
  );
}

export default NotificationToggle;
