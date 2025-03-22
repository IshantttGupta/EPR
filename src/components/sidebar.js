import React, { useState } from "react";
import "./Sidebar.css"; // Sidebar styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Sidebar Navigation */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>

        <nav className="sidebar-nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#features">Features</a>
          <a href="#benefits">Benefits</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
