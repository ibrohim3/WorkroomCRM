import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo_img from '../../assets/icons/logo.svg';
import login_img from '../../assets/images/illustration.png';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [view, setView] = useState('password');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  function toggleEye() {
    setView((prev) => (prev === 'password' ? 'text' : 'password'));
  }
  const [password, setPassword] = useState('');
  const Move = () => {
    navigate('page1');
  };

  return (
    <div className="login__wrapper">
      <div className="Login">
        <div className="left">
          <div className="logo__img">
            <img
              src={Logo_img}
              alt="img"
              loading="lazy"
              width={50}
              height={50}
            />
            <p>Woorkroom</p>
          </div>
          <h2>
            Your place to work <br /> Plan. Create. Control.
          </h2>
          <img
            src={login_img}
            alt="img"
            loading="lazy"
            width={505}
            height={340}
          />
        </div>

        <div className="right">
          <h2 className="right_title">Sign In to Woorkroom</h2>

          <form>
            <div className="Email_Address">
              <small>Email Address</small>
              <input type="email" placeholder="youremail@gmail.com" />
            </div>

            <div className="Password">
              <small>Password</small>
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

            <div className="check__wrapper">
              <div className="check">
                <input type="checkbox" />
                <small>Remember me</small>
              </div>
              <p>Forgot Password?</p>
            </div>
          </form>

          <button className="right__button">Sign In</button>
          <p onClick={Move} className="forget_password">
            Don’t have an account?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
