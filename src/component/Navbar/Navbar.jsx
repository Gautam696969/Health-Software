import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSun, BsMoon } from "react-icons/bs";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  

  return (
    <header className="navbar-header">
      <div className="navbar-content">
        <h1 className="logo-text">Healthcare</h1>

        <nav className={`nav-menu ${showMenu ? 'show' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button 
            className="theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <BsSun /> : <BsMoon />}
          </button>
        </nav>

        <button className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
          <GiHamburgerMenu />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
