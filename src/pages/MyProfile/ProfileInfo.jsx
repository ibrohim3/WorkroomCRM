import React from "react";
import "./profileInfo.css";
function ProfileInfo() {
  return (
    <div className="profile-info">
      <div className="info-head">
        <div className="user">
          <img src="/photo.png" alt="user image" loading="lazy" />
          <h3>Evan Yates</h3>
          <p>UI/UX Designer</p>
        </div>
        <div className="changer-btn">
          <i className="fa-regular fa-pen-to-square"></i>
        </div>
      </div>
      <div className="main-info">
        <form className="form">
          <h4>Main Info</h4>
          <div className="main-info-group">
            <label htmlFor="position">Position</label>
            <input type="text" defaultValue={"UI/UX Designer"} />
            <label htmlFor="company">Company</label>
            <input type="text" defaultValue={"Cadabra"} />
            <label htmlFor="company">Location</label>
            <input type="text" defaultValue={"NYC, New York, USA"} />
            <label htmlFor="company">Birthday Date</label>
            <input type="date" defaultValue={"1990-01-01"} />
          </div>
        </form>
        <form className="form">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <label htmlFor="position">Email</label>
            <input type="text" defaultValue={"evanyates@gmail.com"} />
            <label htmlFor="company">Mobile Number</label>
            <input type="text" defaultValue={"+1 675 346 23-10"} />
            <label htmlFor="company">Skype</label>
            <input type="text" defaultValue={"Evan 2256"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileInfo;
