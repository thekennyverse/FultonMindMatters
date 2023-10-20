import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="nav-item dropdown">
          More Resources
          <ul className="dropdown-content">
            <li><Link to="/shelter">Shelter</Link></li>
            <li><Link to="/family">Family Resources</Link></li>
            <li><Link to="/finicial">Financial Assistance</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
