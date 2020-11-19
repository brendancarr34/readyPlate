import React from 'react';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


function Login () {
    return (
        <div height='100vh'>
            <Container fluid style={{height:'100vh'}}>
                <Row s={2} >
                    <Col xs={8} style={{backgroundColor: '#f47373', justifyContent:'center'}}>
                        <div style={{height:'100vh',marginTop: '5%'}}>
                            <Image style={{ flex:1, 
                                        height: undefined, 
                                        width: undefined,
                                        }} src={require("./static/readyplate.png")} fluid />
                        </div>
                    </Col>
                    <Col style={{backgroundColor:'skyblue'}}>
                            <h1 style={{paddingTop:'50%'}}>
                                welcome 2 readyPlate
                            </h1>
                            <Form style={{paddingTop:'5%'}}>
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