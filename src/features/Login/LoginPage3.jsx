import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage3.css';
import sitelogo from '../../assets/icons/logo.svg';
import arrow from '../../assets/icons/white.svg';
import arrowBack from '../../assets/icons/arrow-back.svg';

function LoginPage3() {
  const members = [
    'Only me',
    '2-5',
    '6-10',
    '11-20',
    '21-40',
    '41-50',
    '51-100',
    '101-500',
  ];

  const [selected, setSelected] = useState(null); // track selected index
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/page4');
  };

  const preview = () => {
    navigate('/page2');
  };

  return (
    <div className="login-page3">
      <div className="login-page-left3">
        <img src={sitelogo} alt="site-logo" />
        <div className="progress-bar3">
          <h2>Get started</h2>
          <div>
            <div className="progress-check3">
              <div className="circle3">✓</div>
              <div className="column3"></div>
              <div className="circle3">✓</div>
              <div className="column3"></div>
              <div className="circle3"></div>
              <div className="column3"></div>
              <div className="circle3"></div>
            </div>
            <ul className="progress-ul3">
              <li>Valid your phone</li>
              <li>Tell about yourself</li>
              <li>Tell about your company</li>
              <li>Invite Team Members</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="login-page-main3">
        <div className="main-top3">
          <div className="main-container3">
            <div className="main-title3">
              <p>Step 3/4</p>
              <h2>Tell about your company</h2>
            </div>

            <div className="select-company select">
              <label htmlFor="company">Your Company’s Name</label>
              <div>
                <input type="text" id="company" placeholder="Company’s Name" />
              </div>
            </div>

            <div className="select-quality select">
              <label htmlFor="direction">Business Direction</label>
              <div>
                <select id="direction">
                  <option value="">IT and programming</option>
                  <option value="">Tutor</option>
                  <option value="">Health care</option>
                </select>
              </div>
            </div>

            <div className="team-members">
              <p>How many people in your team?</p>
              <ul>
                {members.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setSelected(index)}
                    className={selected === index ? 'selected' : ''}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="main-footer2">
          <button onClick={preview}>
            <img src={arrowBack} alt="arrow back" />
            Previous
          </button>
          <button onClick={handleNext}>
            Next Step <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage3;
