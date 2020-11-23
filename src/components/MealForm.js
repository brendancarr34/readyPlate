import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Form, Dropdown, DropdownButton, Button, ButtonGroup} from 'react-bootstrap';
import firebase from "firebase/app";
import 'firebase/database';
import '../styles/Chef.css'
import useUser from '../hooks/userHooks.js'


const MealForm = () => {
    
    let temp_user = firebase.auth().currentUser
    let uid = temp_user.uid;
    const user = useUser(uid);
    // Get form values from field and add to object of form values
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
    // Add new item field when user clicks 'add an item'
    const [mealEntryCount, setMealEntryCount] = useState(1);
    const addOneMealEntry = () => setMealEntryCount(mealEntryCount + 1);
    const deleteOneMealEntry = () => {
        updateFormValues({
            [mealEntryCount - 1]: null
        })
        setMealEntryCount(mealEntryCount >1 ? mealEntryCount - 1 : mealEntryCount)
    };

    const mealFormItems = (new Array(mealEntryCount)).fill(0).map((item, index) => (
        <Form.Group controlId={`mealForm.mealItem${index + 1}`}>
            <Form.Label>Item #{(index+1).toString()}</Form.Label>
            <Form.Control placeholder="Lasagna" onChange={getHandleFieldChange(index)}/>
        </Form.Group>
    ))
    const handleFormSubmit = () => {
        const cleanedValues = {};
        for (let item of Object.keys(formValues)) {
            if (formValues[item] !== null) {
                cleanedValues[item] = formValues[item];
            }
        }
        console.log("Form Values:")
        console.log(cleanedValues);
        writeMealData(cleanedValues);
    }

    function writeMealData(formInput) {
        let foodItems = {};
        for (let item of Object.keys(formInput)) {
            if (item !== "name" && item !== "date") {
                foodItems[item] = formInput[item];
            }
        }
        console.log("Food Items:")
        console.log(foodItems);
        firebase.database().ref(`group/${user.group}/date/${formInput.date}/${formInput.name}`).set(foodItems);
    }


    return (
        <div>
            <Form id="meal-editor">
                <Form.Group controlId="mealForm.mealName">
                    <Form.Label>Meal Name</Form.Label>
                    <Form.Control placeholder="Dinner" onChange={getHandleFieldChange('name')}/>
                </Form.Group>
                <Form.Group controlId="mealForm.mealDate">
                    <Form.Label>Meal Date</Form.Label>
                    <Form.Control placeholder="YYYY-MM-DD" onChange={getHandleFieldChange('date')}/>
                    <Form.Text id="dateHelpBlock" muted>
                        All dates must be in the form YYYY-MM-DD. Don't forget your slashes!
                    </Form.Text>
                </Form.Group>
                {mealFormItems}
            </Form>
            <ButtonGroup>
                <Button variant="primary" onClick={addOneMealEntry}>
                    Add an Item
                </Button>
                <Button variant="danger" onClick={deleteOneMealEntry}>
                    Delete an Item
                </Button>
            </ButtonGroup>
            <div><br/></div>
            <Button variant="light" size="lg" block onClick={() => {handleFormSubmit(); window.location.reload()}}>
                Submit
            </Button>
        </div>
    );
}

export default MealForm;