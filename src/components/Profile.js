//import { user } from 'firebase-functions/lib/providers/auth';
import React from 'react';
import {Image, Form, Col, Row, Container, DropdownButton, Dropdown, Button} from 'react-bootstrap';
import useUser from '../hooks/userHooks.js';
//import firebase from 'firebase';
import firebase from "firebase/app";
import auth from 'firebase/auth';
import Cookies from 'universal-cookie';
import profilePicSwitch from '../hooks/profilePicHook.js'
const cookies = new Cookies();

const Profile = () => {

    let uid = cookies.get('uid');
    // console.log('uid');
    // console.log(uid);
    
    let cardUser = useUser(uid);

    if(!cardUser) {
        return null;
    } else {

        // console.log("uid:" + uid);
        // console.log("cardUser:");
        // console.log(cardUser);

        let picture_string = profilePicSwitch(cardUser.pic);

        const picArr = Array.from({length: 8}, (_, i) => i + 1);

        const handleEditPic = (num) => {
            firebase.database().ref(`users/${uid}/pic`).set(num).then(() => {
                // console.log('Profile Pic Change Successful');
                picture_string = profilePicSwitch(num);
                window.location.reload();
            }).catch((error) => {
                // console.log("Make sure you're logged into your account to change your profile picture!");
            });
        }

        const handleEditName = (name) => {
            firebase.database().ref(`users/${uid}/name`).set(name).then(() => {
                // console.log('Profile Pic Change Successful');
                window.location.reload();
            }).catch((error) => {
                // console.log("Make sure you're logged into your account to change your profile picture!");
            });
        }

        const handleEditGroup = (group) => {
            firebase.database().ref(`users/${uid}/group`).set(group).then(() => {
                // console.log('Profile Pic Change Successful');
                window.location.reload();
            }).catch((error) => {
                // console.log("Make sure you're logged into your account to change your profile picture!");
            });
        }

        let profilePic = <Image src={picture_string} style={{height: '200px', width: '200px'}} alt='pf' fluid/>;
        
        return (
            <div style = {{paddingTop:'3%'}}>
                <Container fluid>
                    <Row xs = {1} style={{flex:'1'}}>
                        <Col xs={4} md={2} style={{justifyContent:'center', flex:'1'}}>
                            <div>
                                {profilePic}
                            </div>
                            <div style={{paddingTop:'20%', paddingLeft:'5%'}}>
                                <DropdownButton variant = 'secondary' drop="right" size='sm' title="Edit Picture">
                                    {picArr.map((num) => (
                                        <Dropdown.Item eventKey={num} onClick={() => {handleEditPic(num)}}><Image style={{height: "60px", width: "60px"}} src={profilePicSwitch(num)}></Image></Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </div>
                        </Col>
                        <Col md="auto">
                            <div style={{paddingLeft:'20%',display:'inline'}}>
                                <h1>Name: {cardUser.name}</h1>
                                <h3>Group: {cardUser.group}</h3>
                                <h3>Type: {cardUser.type}</h3>
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