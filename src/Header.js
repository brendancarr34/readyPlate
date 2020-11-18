import React from 'react';
// import logo from './logo.svg';
import './Header.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Form, FormControl} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image, DropdownButton, Dropdown} from 'react-bootstrap';

function Header() {
  let link = window.location.href;
  if (link.includes('login')) {
    return null;
  } else {
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Image src={require("./static/readyplate.png")} alt='logo' width='90px' height='60px'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <DropdownButton variant="secondary" id="dropdown-basic-button" title="Information">
          <Dropdown.Item disabled='true'>
            <Image src={require("./static/profilepic.png")} width='50px' height='50px' alt='pf'/>
          </Dropdown.Item>
          <Dropdown.Item href="/profile">Profile</Dropdown.Item>
          <Dropdown.Item href="/login">Logout</Dropdown.Item>
        </DropdownButton>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default Header;
