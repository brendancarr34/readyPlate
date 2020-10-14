import React from 'react';
import './DayCard.css';
import { Card, Dropdown, DropdownButton, Accordion, ListGroup} from 'react-bootstrap';

function DayCard() {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title className="text-center">
                        October 12th
                </Card.Title>
                <Card.Text>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle className="text-center" as={Card.Header} eventKey="0">
                                Breakfast
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Bagels</ListGroup.Item>
                                    <ListGroup.Item>Assorted Fruit</ListGroup.Item>
                                    <ListGroup.Item>Cereal w/ Milk</ListGroup.Item>
                                    <ListGroup.Item>Sausage and Cheese Omelete</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle className="text-center" as={Card.Header} eventKey="1">
                                Lunch
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cuban Sandwhich</ListGroup.Item>
                                    <ListGroup.Item>Fries</ListGroup.Item>
                                    <ListGroup.Item>Creamy Cuban Aioli</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle className="text-center" as={Card.Header} eventKey="2">
                                Dinner
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Tangerine Marinated Chicken</ListGroup.Item>
                                    <ListGroup.Item>Green Beans</ListGroup.Item>
                                    <ListGroup.Item>Rice</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Card.Text>
                <div class='text-center'>
                    <DropdownButton id="dropdown-basic-button" title="Meal Options" class='center'>
                        <Dropdown.Item href="#/action-1">Rate Meal</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Request Late Plate</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Message Chef</Dropdown.Item>
                    </DropdownButton>
                </div>
            </Card.Body>
        </Card>
    );
}

export default DayCard;