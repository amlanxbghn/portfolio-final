import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaEnvelope, FaUser, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <FaBars className="menu-icon" onClick={toggleMenu} />
      <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item" onClick={() => handleNavClick('home')}>
          <FaHome className="navbar-icon" />
          Home
        </li>
        <li className="navbar-item" onClick={() => handleNavClick('about')}>
          <FaInfoCircle className="navbar-icon" />
          About
        </li>
        <li className="navbar-item" onClick={() => handleNavClick('skills')}>
          <FaUser className="navbar-icon" />
          Skills
        </li>
        <li className="navbar-item" onClick={() => handleNavClick('contact')}>
          <FaEnvelope className="navbar-icon" />
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
