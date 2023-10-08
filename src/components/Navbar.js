// Navbar.js

import React from 'react';
import './Navbar.css'; 

import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
   
    <nav className="navbar">
    <ul className="nav-list">
      <Link to="/">Home</Link> 
      <Link to="aboutus">aboutus</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/contact">Contact</Link>  
    </ul>
  </nav>
  );
};

export default Navbar;
