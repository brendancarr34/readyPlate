//import { user } from 'firebase-functions/lib/providers/auth';
import React from 'react';
import {Image, Form, Col, Row, Container, Button, Jumbotron } from 'react-bootstrap';
import useUser from '../hooks/userHooks.js';
//import firebase from 'firebase';
import firebase from "firebase/app";
import auth from 'firebase/auth';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Profile = () => {

    let uid = cookies.get('uid');
    console.log('uid');
    console.log(uid);
    
    let cardUser = useUser(uid);
    
    if(!cardUser) {
        return null;
    } else {

        console.log("uid:" + uid);
        console.log("cardUser:");
        console.log(cardUser);

        let picture_string = "../static/profilepic.png";
        switch (cardUser.profilePic) {
            case 1: 
                picture_string = require("../static/profilePics/disguise.png"); break;
            case 2:
                picture_string = require("../static/profilePics/goofy.png");    break;
            case 3:
                picture_string = require("../static/profilePics/money-tongue.png"); break;
            case 4:
                picture_string = require("../static/profilePics/purpleDevil.png");  break;
            case 5:
                picture_string = require("../static/profilePics/star-eyes.png"); break;
            case 6:
                picture_string = require("../static/profilePics/sunglasses-smile.png"); break;
            case 7:
                picture_string = require("../static/profilePics/winking-tongue.png");   break;
            default:
                picture_string = "../static/profilepic.png";
        }
        console.log(picture_string);
        
        return (
            <div style = {{paddingTop:'3%'}}>
                <Container fluid>
                    <Row xs = {1} style={{flex:'1'}}>
                        <Col xs={4} md={2} style={{justifyContent:'center', flex:'1'}}>
                            <div>
                                <Image src={picture_string} alt='pf' fluid/>
                            </div>
                            <div style={{paddingTop:'20%', paddingLeft:'5%'}}>
                                <Button variant = 'secondary' size='sm'>
                                    Edit Profile Picture
                                </Button>
                            </div>
                        </Col>
                        <Col md="auto">
                                
    
                            <div style={{paddingLeft:'20%',display:'inline'}}>
                                <h1>Name: {cardUser.name}</h1>
                                <h3>Group: {cardUser.group}</h3>
                            </div>
                        </Col>
                        <Col>
    
                        </Col>
                    </Row>
              </Container> 
            </div>
        );
        
    }   
}

export default Profile;