import React from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <BootstrapNavbar.Brand as={Link} to="/home">Home</BootstrapNavbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
        <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/dropdown-item-1">Dropdown Item 1</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/dropdown-item-2">Dropdown Item 2</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/dropdown-item-3">Dropdown Item 3</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
};

export default Navbar;
