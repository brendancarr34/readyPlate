import React from 'react';
// import logo from './logo.svg';
import '../styles/Header.css';
import { Navbar, Nav} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Image, DropdownButton, Dropdown} from 'react-bootstrap';
import firebase from 'firebase';
import auth from 'firebase/auth';

function Header() {
  const logout = () => {
    firebase.auth().signOut().then(function() {
      window.location.href = "/#/login";
    }).catch(function(error) {
      console.log("Logout didn't work");
    });
  }

  // const plateEditor = () => {
  //   if (user.type !== "user") {
  //     return (
  //         <Nav.Link href="/chef">Plate Editor</Nav.Link>
  //     )
  //   } else return null;
  // }
  let link = document.location.pathname;

  if (link.includes('login') || link.includes('signup')) {
    return null;
  } else {
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <Image src={require("../static/readyplate.png")} alt='logo' width='90px' height='60px'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {/* {plateEditor} */}
          <Nav.Link href="/#/chef">Plate Editor</Nav.Link>
        </Nav>
        <DropdownButton variant="secondary" id="dropdown-basic-button" title="Information">
          <Dropdown.Item disabled='true'>
            <Image src={require("../static/profilepic.png")} width='50px' height='50px' alt='pf'/>
          </Dropdown.Item>
          <Dropdown.Item href="/#/profile">Profile</Dropdown.Item>
          <Dropdown.Item onClick={() => {logout()}}>Logout</Dropdown.Item>
        </DropdownButton>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default Header;
