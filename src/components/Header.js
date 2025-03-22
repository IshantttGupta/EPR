// import React from 'react';
// import './Header.css'; // We'll create this CSS file next
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <img src="/logo.png" alt="NoaSoft Logo" />
//       </div>
//       <nav className="nav">
//         <a href="#home" className="active">Home</a>
//         <a href="#about">About Us</a>
//         <a href="#features">Features</a>
//         <a href="#benefits">Benefits</a>
//         <a href="#blog">Blog</a>
//         <a href="#contact">Contact</a>
//       </nav>
//       <div className="actions">
//         <button className="login-btn">Login</button>
//         <button className="register-btn">Register Now</button>
//       </div>
//     </header>
//   );
// };

// export default Header;
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "./Header.css";

// // const Header = () => {
// //   return (
// //     <header className="header">
// //       <div className="logo">
// //         <img src="/logo.png" alt="NoaSoft Logo" />
// //       </div>
// //       <nav className="nav">
// //         <Link to="/" className="active">Home</Link>
// //         <Link to="/about">About Us</Link>
// //         <Link to="/features">Features</Link>
// //         <Link to="/benefits">Benefits</Link>
// //         <Link to="/blog">Blog</Link>
// //         <Link to="/contact">Contact</Link>
// //       </nav>
// //       <div className="actions">
// //         <button className="login-btn">Login</button>
// //         <button className="register-btn">Register Now</button>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;


import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>NoaSoft Logo</h1>
      </div>

      <nav className="nav">
        <Link to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</Link>
        <Link to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About Us</Link>
        <Link to="/features">Features</Link>
        <Link to="/benefits">Benefits</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="actions">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </header>
  );
};

export default Header;
