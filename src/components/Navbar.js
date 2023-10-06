// Navbar.js

import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">AboutUs</li>
        <li className="nav-item">Resources</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
