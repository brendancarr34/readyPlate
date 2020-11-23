import React, { useState } from 'react';
import {Image, Form, Col, Row, Container, Button, Jumbotron } from 'react-bootstrap';
import getSignIn from '../hooks/signInHook.js'
import firebase from 'firebase';
import auth from 'firebase/auth';
import useUser from '../hooks/userHooks.js';
import Cookies from 'universal-cookie';


function Login () {
    const cookies = new Cookies();

    let user = {};
    let userDefined = false;
    const [formValues, setFormValues] = useState({});
    const updateFormValues = (updateObject) => {
        setFormValues({
            ...formValues,
            ...updateObject
        });
    };
    const getHandleFieldChange = (index) => (event) => {
        const fieldIndex = index;
        const newValue = event.target.value;
        updateFormValues({
            [fieldIndex]: newValue,
        })
    }
    let uid = "";
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          uid = user.uid;
          userDefined = true;
          cookies.set('uid', uid, { path: '/' });
          console.log(cookies.get('uid'));
          window.location.href = '/';
        } else {
            console.log("Didn't work");
        }
      });
      
      let userObj = useUser(uid);

      if(userDefined) {
        user = userObj;
      }
    return (
        <div>
            <Container fluid style={{backgroundColor: '#f47373', height: '100vh', display: 'flex'}}>
                <Row s={2} style={{flex: '1'}}>
                    <Col md={8} style={{justifyContent:'center'}}>
                        <div style={{marginTop: '5%'}}>
                            <Image style={{ flex:1, height: undefined, width: undefined }} src={require("../static/readyplate.png")} fluid />
                        </div>
                    </Col>
                    <Col style={{backgroundColor:'skyblue'}}>
                        <div>
                            <Image src={require("../static/readyplate-logo-only.png")} fluid style={{marginTop:'20%'}}/>
                        </div>
                        <Form style={{paddingTop:'5%', paddingBottom: '5%', flex: 1, height: "1"}}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" onChange={getHandleFieldChange('email')}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" onChange={getHandleFieldChange('password')}/>
                            </Form.Group>
                            <Button style={{marginTop:'5%'}} block onClick={() => {getSignIn(formValues)}}>
                                    Sign In
                            </Button>
                            <p style={{marginTop:'10%'}}>
                                Don't have an account yet?
                            </p>
                            <Button block href='/#/signup'>
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;