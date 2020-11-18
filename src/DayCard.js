import React from 'react';
import './DayCard.css';
import { Card, Dropdown, DropdownButton, Accordion, ListGroup} from 'react-bootstrap';
import firebase from "firebase/app";
import 'firebase/database';
import { firebaseConfig } from './stores.js'

firebase.initializeApp(firebaseConfig);

let getMeals = async function(group, date) {
    let mealJSON = {fuck: 'shit'};
    let meals = firebase.database().ref(`group/${group}/date/${date}`);
    meals.once("value").then(function(snapshot) {
        mealJSON = snapshot.val();
        console.log(mealJSON);
    });
};

let DayCard = async function(group, date) {
    group = group || "SigChiUNC";
    date = date || "2020-10-12";
    let meals;
    meals = await getMeals(group, date);
    console.log(meals);
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title className="text-center">
                        {new Date(date.split('-')[0], date.split('-')[1], date.split('-')[2]).toDateString()}
                </Card.Title>
                <Card.Text>
                    <Accordion>
                        {meals.map(meal => (
                            <Card>
                            <Accordion.Toggle className="text-center pointer" as={Card.Header} eventKey="0">
                                {meal}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    {meal[0].map(item => (
                                        <ListGroup.Item class="food-item">{item}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        ))}
                        {/* <Card>
                            <Accordion.Toggle className="text-center pointer" as={Card.Header} eventKey="0">
                                Breakfast
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item class="food-item">Bagels</ListGroup.Item>
                                    <ListGroup.Item class="food-item">Assorted Fruit</ListGroup.Item>
                                    <ListGroup.Item class="food-item">Cereal w/ Milk</ListGroup.Item>
                                    <ListGroup.Item class="food-item">Sausage and Cheese Omelete</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle className="text-center pointer" as={Card.Header} eventKey="1">
                                Lunch
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item class="food-item">Cuban Sandwhich</ListGroup.Item>
                                    <ListGroup.Item class="food-item">Fries</ListGroup.Item>
                                    <ListGroup.Item class="food-item">Creamy Cuban Aioli</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle className="text-center pointer" as={Card.Header} eventKey="2">
                                Dinner
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item class="food-item">Tangerine Marinated Chicken</ListGroup.Item>
                                    <ListGroup.Item class="food-item">Green Beans</ListGroup.Item>
                                    <ListGroup.Item class="food-item">Rice</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card> */}
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