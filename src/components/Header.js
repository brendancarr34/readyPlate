import React from 'react';
// import logo from './logo.svg';
import '../styles/Header.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Form, FormControl} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import useUser from '../hooks/userHooks.js'
import { Image, DropdownButton, Dropdown} from 'react-bootstrap';

function Header() {
  let user = useUser();
  const plateEditor = () => {
    if (user.type !== "user") {
      return (
          <Nav.Link href="/chef">Plate Editor</Nav.Link>
      )
    } else return null;
  }
  let link = window.location.href;
  if (link.includes('login') || link.includes('signup')) {
    return null;
  } else {
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Image src={require("../static/readyplate.png")} alt='logo' width='90px' height='60px'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {/* {plateEditor} */}
          <Nav.Link href="/chef">Plate Editor</Nav.Link>
        </Nav>
        <DropdownButton variant="secondary" id="dropdown-basic-button" title="Information">
          <Dropdown.Item disabled='true'>
            <Image src={require("../static/profilepic.png")} width='50px' height='50px' alt='pf'/>
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
