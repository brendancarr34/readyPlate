//import { user } from 'firebase-functions/lib/providers/auth';
import React from 'react';
import {Image, Form, Col, Row, Container, Button, Jumbotron } from 'react-bootstrap';
import useUser from '../hooks/userHooks.js';
//import firebase from 'firebase';
import firebase from "firebase/app";
import auth from 'firebase/auth';
import 'firebase/database';
import { user } from 'firebase-functions/lib/providers/auth';

const Profile = () => {

    //window.location.reload();
    let uid = "";
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     uid = user.uid;
    //   } else {
    //       window.location.href="/#/login";
    //   }
    // });

    let temp_user = firebase.auth().currentUser;
    console.log(temp_user);
    if (temp_user) {
        console.log("name:"+temp_user.displayName);
        console.log("uid:"+temp_user.uid);
        uid = temp_user.uid;
    } else {
        //window.location.reload();
    }
    
    
    let cardUser = useUser(uid);
    
    let user;
    let userName = '';
    let groupName = '';
    let picture = "";
    if(!cardUser) {
        return null;
    } else {
        //console.log(Object.entries(cardUser)[1][1].uid);
        //console.log(firebase.auth().currentUser.displayName);
        console.log("uid:" + uid);
        console.log("cardUser:"+cardUser);
        console.log(Object.entries(cardUser));
        console.log(Object.entries(cardUser)[1][1]);
        console.log(Object.entries(cardUser).length);
     
        //console.log(cardUser.length);
        for (let i = 0; i < Object.entries(cardUser).length; i++) {
            console.log(Object.entries(cardUser)[i][0]);
            if (Object.entries(cardUser)[i][0] == uid) {
                user = Object.entries(cardUser)[i][1]
                console.log("set user:"+user.name);
                userName = user.name;
                groupName = user.group;
                picture = user.pic
            }
        }
        //userName = Object.entries(cardUser)[0][1].name;
        //groupName = Object.entries(cardUser)[1][1].group;

        
    }

    if (userName == '') {
        window.location.reload();
    }

    let picture_string = "../static/profilepic.png";
    switch (picture) {
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
                            <h1>Name: {userName}</h1>
                            <h3>Group: {groupName}</h3>
                        </div>
                    </Col>
                    <Col>

                    </Col>
                </Row>
          </Container> 
        </div>
    );
}

export default Profile;