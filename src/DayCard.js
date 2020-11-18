import React, { useEffect, useRef, useState } from 'react';
import './DayCard.css';
import { Card, Dropdown, DropdownButton, Accordion, ListGroup} from 'react-bootstrap';
import firebase from "firebase/app";
import 'firebase/database';
import { firebaseConfig } from './stores.js'
let cardGroup = null;
let cardDate = null;

firebase.initializeApp(firebaseConfig);

let getMeals = async (group = "SigChiUNC", date = "2020-10-12") => {
    cardGroup = group;
    cardDate = date;
    let meals = firebase.database().ref(`group/${group}/date/${date}`);
    return meals.once("value").then(function(snapshot) {
        return snapshot.val();
    });
};

const jsonToArray = (json) => {
    let arr = [];
    for(const [key, value] of json) {
        arr.append([key, value]);
    }
    return arr;
}

const useMeals = () => {
    const [meals, setMeals] = useState(null);
    const loaded = useRef(false);
    useEffect(() => {
        if (!loaded.current) {
        const getAndSetMeals = async () => {
                const fetchedMeals = await getMeals();
                setMeals(fetchedMeals)
                loaded.current = true;
            }
            getAndSetMeals();
        }
    }, [])
    return meals;
}

let DayCard = () => {
    const meals = useMeals();
    if (!meals) {
        return null;
    }
    console.log(meals)
    let eventkey = "0";
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title className="text-center">
                        {new Date(cardDate.split('-')[0], cardDate.split('-')[1], cardDate.split('-')[2]).toDateString()}
                </Card.Title>
                <Card.Text>
                    <Accordion>
                        {Object.entries(meals).map(meal => (
                            <Card>
                                <Accordion.Toggle className="text-center pointer" as={Card.Header} eventKey={eventkey}>
                                    {meal[0]}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={eventkey}>
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        {meal[1].map(item => (
                                            <ListGroup.Item class="food-item">{item}</ListGroup.Item>
                                        ))}
                                        <p hidden>
                                            {eventkey = parseInt(eventkey)}
                                            {eventkey ++}
                                            {eventkey = eventkey.toString()}
                                        </p>
                                    </ListGroup>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        ))}
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