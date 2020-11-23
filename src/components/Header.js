import React from 'react';
// import logo from './logo.svg';
import '../styles/Header.css';
import { Navbar, Nav} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Image, DropdownButton, Dropdown} from 'react-bootstrap';
import firebase from 'firebase';
import auth from 'firebase/auth';
import useUser from '../hooks/userHooks.js'
import Cookies from 'universal-cookie';
import profilePicSwitch from '../hooks/profilePicHook';

function Header() {
  const cookies = new Cookies();
  const uid = cookies.get('uid');
  const user = useUser(uid);

  const logout = () => {
    firebase.auth().signOut().then(function() {
      cookies.remove('uid');
      window.location.href = "/#/login";
    }).catch(function(error) {
      console.log("Logout didn't work");
    });
  }

  let link = document.location.pathname;

  if (!user || link.includes('login') || link.includes('signup')) {
    return null;
  } else {
    let editButton = <p hidden></p>; 
    console.log('user type:');
    console.log(user.type);
    console.log('user:');
    console.log(user);
    if (user.type !== "user") {
        editButton = <Nav.Link href="/#/chef">Plate Editor</Nav.Link>;
    }
    const pictureString = profilePicSwitch(user.pic)
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <Image src={require("../static/readyplate.png")} alt='logo' width='90px' height='60px'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {editButton}
        </Nav>
        <DropdownButton variant="secondary" id="dropdown-basic-button" title="Options">
          <Dropdown.Item disabled='true'>
            <Image src={pictureString} width='50px' height='50px' alt='pf'/>
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
