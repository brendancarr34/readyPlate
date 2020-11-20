import React from 'react';
import {Image, Form, Col, Row, Container, Button, Jumbotron } from 'react-bootstrap';


function Login () {
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
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button style={{marginTop:'5%'}} block>
                                    Submit
                            </Button>
                            <p style={{marginTop:'10%'}}>
                                Don't have an account yet?
                            </p>
                            <Button block>
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;