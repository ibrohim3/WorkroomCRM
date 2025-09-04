import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage1.css';
import sitelogo from '../../assets/icons/logo.svg';
import arrow from '../../assets/icons/white.svg';

function LoginPage() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [countryCode, setCountryCode] = useState('+998');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputsRef = useRef([]);
  const [code, setCode] = useState(['', '', '', '']);

  const [smsCode, setSmsCode] = useState('0000');

  const generateCode = () => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * 10000);
      const newCode = num.toString().padStart(4, '0');
      setSmsCode(newCode);
    }, 2000);
  };
  const [smsRight, setSmsRight] = useState(-350);

  const removeMessage = () => {
    setSmsRight(-350);
  };
  const returnMessage = () => {
    setTimeout(() => setSmsRight(-350), 500);
    setTimeout(() => setSmsRight(20), 2000);
  };
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSelectChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleChange = (e, index) => {
    let value = e.target.value.replace(/\D/g, ''); // only numbers

    if (value.length > 1) value = value.slice(-1); // keep only 1 digit

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleNext = () => {
    // check required fields
    if (!phoneNumber) {
      alert('⚠️ Please enter your phone number.');
      return;
    }

    if (code.some((digit) => digit === '')) {
      alert('⚠️ Please enter the full 4-digit SMS code.');
      return;
    }

    if (!email) {
      alert('⚠️ Please enter your email.');
      return;
    }

    if (!password) {
      alert('⚠️ Please create a password.');
      return;
    }

    // all inputs filled
    navigate('/page2');
  };

  const handlePhone = () => {
    if (!phoneNumber) {
      alert('⚠️ Please enter your phone number.');
      return;
    } else {
      returnMessage();
      generateCode();
    }
  };

  return (
    <div className="login-page">
      <div className="login-page-left">
        <img src={sitelogo} alt="site-logo" />
        <div className="progress-bar">
          <h2>Get started</h2>
          <div>
            <div className="progress-check">
              <div className="circle"></div>
              <div className="column"></div>
              <div className="circle"></div>
              <div className="column"></div>
              <div className="circle"></div>
              <div className="column"></div>
              <div className="circle"></div>
            </div>
            <ul className="progress-ul">
              <li>Valid your phone</li>
              <li>Tell about yourself</li>
              <li>Tell about your company</li>
              <li>Invite Team Members</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="login-page-main">
        <div className="main-top">
          <div className="main-container">
            <div className="main-title">
              <p>Step 1/4</p>
              <h2>Valid your phone</h2>
            </div>

            <div className="confirm">
              {/* Phone input */}
              <div className="tel-div">
                <label htmlFor="num-inp">Mobile Number</label>
                <div className="tel-bar">
                  <select value={countryCode} onChange={handleSelectChange}>
                    <option value="+998">UZ</option>
                    <option value="+1">US</option>
                    <option value="+44">UK</option>
                    <option value="+49">DE</option>
                    <option value="+33">FR</option>
                    <option value="+39">IT</option>
                    <option value="+34">ES</option>
                    <option value="+81">JP</option>
                    <option value="+82">KR</option>
                    <option value="+86">CN</option>
                    <option value="+91">IN</option>
                    <option value="+92">PK</option>
                    <option value="+93">AF</option>
                    <option value="+94">LK</option>
                    <option value="+95">MM</option>
                    <option value="+62">ID</option>
                    <option value="+60">MY</option>
                  </select>

                  <input
                    type="tel"
                    id="num-inp"
                    value={countryCode + ' ' + phoneNumber}
                    onChange={(e) => {
                      const entered = e.target.value
                        .replace(countryCode, '')
                        .trim();
                      const onlyNums = entered.replace(/\D/g, '');
                      setPhoneNumber(onlyNums);
                    }}
                  />
                  <button onClick={handlePhone}>Send</button>
                </div>
              </div>

              {/* SMS Code */}
              <div className="confirm-div">
                <label>Code from SMS</label>
                <ul className="confirm-ul">
                  {code.map((digit, index) => (
                    <li key={index}>
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength="1"
                        value={digit}
                        ref={(el) => (inputsRef.current[index] = el)}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SMS Notice */}
            <div className="main-notice">
              <i className="fa-solid fa-circle-exclamation"></i>
              <p>
                SMS was sent to your number {countryCode}{' '}
                {phoneNumber || 'xxx-xxx-xxx'}
                <br />
                It will be valid for 01:25 mins
              </p>
            </div>

            {/* Email + Password */}
            <div className="email-apply">
              <div>
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  type="email"
                  id="emailAddress"
                  placeholder="youremail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Create Password</label>
                <div>
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i
                    className={`fa-solid ${
                      passwordVisible ? 'fa-eye' : 'fa-eye-slash'
                    }`}
                    onClick={togglePassword}
                    style={{ cursor: 'pointer' }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="main-footer">
          <button onClick={handleNext}>
            Next Step <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>

      <div className="message" style={{ right: `${smsRight}px` }}>
        <div className="message-top">
          <img src={sitelogo} alt="logo message" />
          <button className="delete-btn" onClick={removeMessage}>
            x
          </button>
        </div>
        <div className="message-bottom">
          <p>
            We have received your request. Please do not share this code with
            others.
          </p>
          <p>
            Your cade is: <span className="varification-code">{smsCode}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
