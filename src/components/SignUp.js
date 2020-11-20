import React, { useState } from 'react';
import {Image, Form, Col, Row, Container, Button, Jumbotron } from 'react-bootstrap';
import getSignUp from '../hooks/signUpHook.js'


function SignUp () {
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

    return (
        <div>
            <Container fluid style={{backgroundColor: '#f47373', height: '100vh', display: 'flex'}}>
                <Row s={2} style={{flex: '1'}}>
                    <Col md style={{justifyContent:'center'}}>
                        <div style={{marginTop: '5%'}}>
                            <Image style={{ flex:1, 
                                        height: undefined, 
                                        width: undefined,
                                        }} src={require("../static/readyplate.png")} fluid />
                        </div>
                    </Col>
                    <Col style={{backgroundColor:'skyblue'}}>
                        <Jumbotron style={{marginTop:'5%'}}>
                            <Container>
                                <h1 style={{textAlign: 'center'}}>Welcome to readyPlate!</h1>
                            </Container>
                        </Jumbotron>
                        <Form style={{paddingTop:'5%', paddingBottom: '5%', flex: 1, height: "1"}}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" onChange={getHandleFieldChange('email')}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" onChange={getHandleFieldChange('password')}/>
                            </Form.Group>
                            <Button style={{marginTop:'5%'}} block onClick={() => {getSignUp(formValues)}}>
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