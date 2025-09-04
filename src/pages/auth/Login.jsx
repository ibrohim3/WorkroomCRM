// import React, { useState } from 'react';
// import login_img from '../../assets/images/login_img.png';
// import Eye from '../../assets/images/viewpassword.png';
// import './Login.css';

// function Login({ onLogin }) {
//   const [view, setView] = useState('password');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   function toggleEye() {
//     setView((prev) => (prev === 'password' ? 'text' : 'password'));
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(email, password);
//   };

//   return (
//     <div className="login__wrapper">
//       <div className="Login">
//         <div className="left">
//           <div className="logo__img">
//             <img
//               src="./public/white.svg"
//               alt="main logo img"
//               loading="lazy"
//               width={50}
//               height={50}
//             />
//             <p>Woorkroom</p>
//           </div>
//           <h2>
//             Your place to work <br /> Plan. Create. Control.
//           </h2>
//           <img
//             src={login_img}
//             alt="Login page's main img"
//             loading="lazy"
//             width={505}
//             height={340}
//           />
//         </div>

//         <div className="right">
//           <h2 className="right_title">Sign In to Woorkroom</h2>

//           <form onSubmit={handleSubmit}>
//             {/* Email */}
//             <div className="Email_Address">
//               <label htmlFor="email">Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="youremail@gmail.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div className="Password">
//               <label htmlFor="password">Password</label>
//               <div>
//                 <input
//                   id="password"
//                   className="password"
//                   type={view}
//                   placeholder="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <img
//                   className="view"
//                   src={Eye}
//                   alt={view === 'password' ? 'Show password' : 'Hide password'}
//                   loading="lazy"
//                   width={24}
//                   height={24}
//                   onClick={toggleEye}
//                   style={{ cursor: 'pointer' }}
//                 />
//               </div>
//             </div>

//             {/* Remember me checkbox */}
//             <div className="check__wrapper">
//               <div className="check">
//                 <input type="checkbox" id="remember" />
//                 <label htmlFor="remember">Remember me</label>
//               </div>
//               <p className="forget_password">Forgot Password?</p>
//             </div>

//             <button type="submit" className="right__button">
//               Sign In
//             </button>
//           </form>

//           <p className="forget_password">Don’t have an account?</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
