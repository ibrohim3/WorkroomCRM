import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage4.css';
import sitelogo from '../../assets/icons/logo.svg';
import arrow from '../../assets/icons/white.svg';
import arrowBack from '../../assets/icons/arrow-back.svg';

function LoginPage4() {
  const [membersList, setMembersList] = useState(() => {
    const saved = localStorage.getItem('membersList');
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('membersList', JSON.stringify(membersList));
  }, [membersList]);

  const navigate = useNavigate();

  const handleAddMember = () => {
    if (inputValue.trim() !== '') {
      setMembersList([...membersList, inputValue.trim()]);
      setInputValue('');
    }
  };
  const handleNext = () => {
    navigate('/finalPage');
  };

  const preview = () => {
    navigate('/page3');
  };
  const handleDeleteMember = (indexToRemove) => {
    setMembersList(membersList.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="login-page4">
      <div className="login-page-left4">
        <img src={sitelogo} alt="site-logo" />
        <div className="progress-bar4">
          <h2>Get started</h2>
          <div>
            <div className="progress-check4">
              <div className="circle4">✓</div>
              <div className="column4"></div>
              <div className="circle4">✓</div>
              <div className="column4"></div>
              <div className="circle4">✓</div>
              <div className="column4"></div>
              <div className="circle4"></div>
            </div>
            <ul className="progress-ul4">
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
              <p>Step 4/4</p>
              <h2>Invite Team Members</h2>
            </div>

            {/* Input field */}
            <div className="select-company select">
              <label htmlFor="AddMember">Member’s Email</label>
              <div>
                <input
                  type="email"
                  id="AddMember"
                  placeholder="memberemail@gmail.com"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
            </div>

            {/* Add button */}
            <div className="add-members" onClick={handleAddMember}>
              <div>+</div>
              <div>Add another Member</div>
            </div>

            {/* Members list */}
            <ul className="added-members">
              {membersList.map((item, index) => (
                <li key={index}>
                  <i className="fa-solid fa-user"></i>
                  <span className="spanish">{item}</span>
                  <div
                    className="del"
                    onClick={() => handleDeleteMember(index)}
                  >
                    x
                  </div>
                </li>
              ))}
            </ul>
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

export default LoginPage4;
