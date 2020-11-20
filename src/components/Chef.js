import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card,Button, ButtonGroup} from 'react-bootstrap';
import '../styles/Chef.css'
import MealForm from './MealForm.js'

const Chef = () => {
    const [mealCreation, setMealCreation] = useState(false);
    const addMealCreation = () => setMealCreation(!mealCreation);
    const mealFormItems = mealCreation ?
             (
                <Card>
                    <Card.Body>
                        <Card.Title className="text-center">
                            Plan your meal!
                        </Card.Title>
                    </Card.Body>
                    <Card.Body>
                        <MealForm/>
                    </Card.Body>
                </Card>
            ) : null
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div><br/><br/></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                            <Button variant="primary" size="large" block onClick={addMealCreation}>
                                Add a Plate
                            </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div><br/><br/></div>
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'center'}}>
                        {mealFormItems}
                    </Col>
                </Row>
            </Container>
      </div>
    );
}

export default Chef;