import React from 'react';
import './Header.css'; // We'll create this CSS file next

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="NoaSoft Logo" />
      </div>
      <nav className="nav">
        <a href="#home" className="active">Home</a>
        <a href="#about">About Us</a>
        <a href="#features">Features</a>
        <a href="#benefits">Benefits</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="actions">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register Now</button>
      </div>
    </header>
  );
};

export default Header;
