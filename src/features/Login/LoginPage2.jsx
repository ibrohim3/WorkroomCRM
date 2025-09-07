import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage2.css';
import sitelogo from '../../assets/icons/logo.svg';
import arrow from '../../assets/icons/white.svg';
import arrowBack from '../../assets/icons/arrow-back.svg';

function LoginPage2() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/page3');
  };
  const preview = () => {
    navigate('/page1');
  };

  return (
    <div className="login-page2">
      <div className="login-page-left2">
        <img src={sitelogo} alt="site-logo" />
        <div className="progress-bar2">
          <h2>Get started</h2>
          <div>
            <div className="progress-check2">
              <div className="circle2">✓</div>
              <div className="column2"></div>
              <div className="circle2"></div>
              <div className="column2"></div>
              <div className="circle2"></div>
              <div className="column2"></div>
              <div className="circle2"></div>
            </div>
            <ul className="progress-ul2">
              <li>Valid your phone</li>
              <li>Tell about yourself</li>
              <li>Tell about your company</li>
              <li>Invite Team Members</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="login-page-main2">
        <div className="main-top2">
          <div className="main-container2">
            <div className="main-title2">
              <p>Step 2/4</p>
              <h2>Tell about yourself</h2>
            </div>
            <div className="select-service select">
              <label htmlFor="service">Why will you use the service?</label>
              <div>
                <select name="" id="service">
                  <option value="">Work</option>
                  <option value="">Study</option>
                  <option value="">Practice</option>
                </select>
              </div>
            </div>
            <div className="select-quality select">
              <label htmlFor="quality">What describes you best?</label>
              <div>
                <select name="" id="quality">
                  <option value="">Business Owner</option>
                  <option value="">Employee</option>
                  <option value="">Student</option>
                </select>
              </div>
            </div>
            <div className="select-check">
              <p>What describes you best?</p>
              <div>
                <div>
                  <input type="radio" name="answer" id="yes" />
                  <label htmlFor="yes">Yes</label>
                </div>
                <div>
                  <input type="radio" name="answer" id="no" />
                  <label htmlFor="no">No</label>
                </div>
              </div>
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

export default LoginPage2;
