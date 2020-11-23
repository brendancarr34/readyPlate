import React from 'react';
import '../styles/DayCard.css';
import { Card, Dropdown, DropdownButton, Accordion, ListGroup, Jumbotron, Button} from 'react-bootstrap';
import useMeals from '../hooks/mealHook.js'



let DayCard = ({
    cardGroup,
    cardDate,
}) => {
    const meals = useMeals(cardGroup, cardDate);
    if (!meals) {
        return (
            <Card style={{marginBottom: "5%"}}>
                <Card.Body>
                    <Card.Title className="text-center">
                            {new Date(cardDate.split('-')[0], cardDate.split('-')[1]-1, cardDate.split('-')[2]).toDateString()}
                    </Card.Title>
                    <Card.Text>
                        <Jumbotron style={{maxHeight: "300px"}}>
                            <h1>No Plate Planned!</h1>
                            <p>
                                Contact your chef for more information. Sorry!
                            </p>
                            <p>
                                <Button variant="info">Contact Chef</Button>
                            </p>
                        </Jumbotron>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
    // console.log(meals)
    let eventkey = "0";
    return (
        // <Card style={{ width: '20rem' }}>
        <Card style={{marginBottom: "5%"}}>
            <Card.Body>
                <Card.Title className="text-center">
                        {new Date(cardDate.split('-')[0], cardDate.split('-')[1]-1, cardDate.split('-')[2]).toDateString()}
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
                {/* <div class='text-center'>
                    <DropdownButton id="dropdown-basic-button" title="Meal Options" class='center'>
                        <Dropdown.Item href="#/action-1">Rate Meal</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Request Late Plate</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Message Chef</Dropdown.Item>
                    </DropdownButton>
                </div> */}
            </Card.Body>
        </Card>
    );
}

export default DayCard;