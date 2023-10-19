import React from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <BootstrapNavbar.Brand as={Link} to="/home">Home</BootstrapNavbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
        <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
        <NavDropdown title="Additional Resources" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/dropdown-item-1">Shelter</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/dropdown-item-2">Family Resources </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/dropdown-item-3">Financial Assistance</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
};

export default Navbar;

