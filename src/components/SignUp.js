import React, { useState } from 'react';
import {Image, Form, Col, Row, Container, Button, ButtonGroup } from 'react-bootstrap';
import getSignUp from '../hooks/signUpHook.js'
import SchoolSearch from './SchoolSearch.js';
import firebase from 'firebase';
import database from 'firebase/database'
import useUser from '../hooks/userHooks.js'
import Cookies from 'universal-cookie';



function SignUp () {
    const cookies = new Cookies();
    const [formValues, setFormValues] = useState({});
    const updateFormValues = (updateObject) => {
        setFormValues({
            ...formValues,
            ...updateObject
        });
    };
    const getHandleFieldChange = (label) => (event) => {
        const fieldIndex = label;
        const newValue = event.target.value;
        updateFormValues({
            [fieldIndex]: newValue,
        })
    }
    const reload = () => {
        window.location.href = '/';
    }

    let uid = "";
    let userDefined = false;
    let clickedSubmit = false;

    firebase.auth().onAuthStateChanged((user) => {
        if (user && !userDefined) {
            uid = user.uid;
            cookies.set('uid', uid, { path: '/' });
            userDefined = true;
            let profilePic = Math.floor(Math.random() * 15)
            if (formValues.group && uid && clickedSubmit) {
                console.log(formValues);
                firebase.database().ref(`users/${uid}`).set({
                    group: formValues.group,
                    name: formValues.fName + " " + formValues.lName,
                    type: formValues.type,
                    // school: formValues.school,
                    pic: profilePic
                }).then(() => {
                    console.log('Sign-Up successful');
                    reload();
                }).catch((error) => {
                    console.log('Writing user data to database unsuccessful');
                });
            }
        } else {
            console.log("Not Signed In");
        }
        });


    return (
        <div>
            <Container fluid style={{backgroundColor: '#f47373', display: 'flex'}}>
                <Row s={2} style={{flex: '1'}}>
                    <Col md={8} style={{justifyContent:'center'}}>
                        <div style={{marginTop: '5%'}}>
                            <Image style={{ flex:1, 
                                        height: undefined, 
                                        width: undefined,
                                        }} src={require("../static/readyplate.png")} fluid />
                        </div>
                    </Col>
                    <Col style={{backgroundColor:'skyblue'}}>
                        <div style = {{paddingTop:'5%'}}>
                            <Image src={require("../static/readyplate-logo-only.png")} fluid/>
                        </div>
                        <Form style={{paddingTop:'2%', paddingBottom: '2%', flex: 1, height: "1"}}>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" onChange={getHandleFieldChange('fName')}/>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" onChange={getHandleFieldChange('lName')}/>
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" onChange={getHandleFieldChange('email')}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" onChange={getHandleFieldChange('password')}/>
                            </Form.Group>
                            <SchoolSearch onChange={getHandleFieldChange('school')}/>
                            <Form.Group controlId="formType" style={{marginTop:'2%'}}>
                                <Form.Label>User type</Form.Label>
                                <Form.Check type="radio" label="user" name="userTypes" value="user" onChange={getHandleFieldChange('type')}/>
                                <Form.Check type="radio" label="chef" name="userTypes" value="chef" onChange={getHandleFieldChange('type')}/>
                            </Form.Group>
                            <Form.Group controlId="formGroup">
                                <Form.Label>Group Code</Form.Label>
                                <Form.Control type="text" placeholder="Enter Group Code" onChange={getHandleFieldChange('group')}/>
                            </Form.Group>
                            <Button style={{marginTop:'5%'}} block onClick={() => {getSignUp(formValues); clickedSubmit = true;}}>
                                    Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignUp;