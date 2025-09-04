import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import message from '../../assets/images/message.png'

function Sidebar() {
  return (
    <div className='sidebar__wrapper'>

      <div className="Sidebar">
        <img className='sidebar__main__img' src="./Companylogo.png" alt="img" loading='lazy' width={50} height={50} />


        <ul className='sidebar__path'>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"Dashboard"}><img src="./active.png" alt="icon" loading='lazy' width={24} height={24} />Dashboard</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"Projects"}><img src="./inactive.png" alt="icon" loading='lazy' width={24} height={24} />Projects</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"Calendar"}><img src="./bookbasket.png" alt="icon" loading='lazy' width={24} height={24} />Calendar</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"Vacations"}><img src="./sidebar__plane.png" alt="icon" loading='lazy' width={24} height={24} />Vacations</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"Employees"}><img src="./sidebar__human.png" alt="icon" loading='lazy' width={24} height={24} />Employees</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"Messenger"}><img src="./sidebar_message.png" alt="icon" loading='lazy' width={24} height={24} />Messenger</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} id='sidebar__active' to={"Info Portal"}><img src="./sidebar__folder.png" alt="icon" loading='lazy' width={24} height={24} />Info Portal</NavLink>
        </ul>

        <div className="Support_wrapper">

          <img className='Support__support_img' src="./support.png" alt="support" width={140} height={124} />

          <button><img src={message} alt="img" width={24} height={24} />Support</button>

        </div>

      </div>

      <div className="site_header">

        <div className="search__input__wrapper">
          <img src="./search.png" alt="img" width={24} height={24} />
          <input type="text" placeholder='search' />
        </div>

        <div className="header__right__wrapper">

          <div className="notification__wrapper">
            <img src="./notifications.png" alt="img" loading='lazy' width={24} height={24} />
          </div>

          <div className="header__people">
            <img src="/" alt="img" width={25} height={25} />
            <h3>Evan Yates</h3>
            <img src="./right.png" alt="img" loading='lazy' height={24} width={24} />
          </div>

        </div>



      </div>


    </div>
  )
}

export default Sidebar