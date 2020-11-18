import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Form, Dropdown, DropdownButton, Button, ButtonGroup} from 'react-bootstrap';
import firebase from "firebase/app";
import './Chef.css'


const MealForm = () => {
    const [formValues, setFormValues] = useState({});
    const updateFormValues = (updateObject) => {
        setFormValues({
            ...formValues,
            ...updateObject
        });
    };

    const [mealEntryCount, setMealEntryCount] = useState(1);
    const addOneMealEntry = () => setMealEntryCount(mealEntryCount + 1);
    const deleteOneMealEntry = () => {
        updateFormValues({
            [mealEntryCount - 1]: null
        })
        setMealEntryCount(mealEntryCount >1 ? mealEntryCount - 1 : mealEntryCount)
    };

    const getHandleFieldChange = (index) => (event) => {
        const fieldIndex = index;
        const newValue = event.target.value;
        updateFormValues({
            [fieldIndex]: newValue,
        })
    }
    const mealFormItems = (new Array(mealEntryCount)).fill(0).map((item, index) => (
        <Form.Group controlId={`mealForm.mealItem${index + 1}`}>
            <Form.Label>Item #{(index+1).toString()}</Form.Label>
            <Form.Control placeholder="Lasagna" onChange={getHandleFieldChange(index)}/>
        </Form.Group>
    ))
    const handleFormSubmit = () => {
        const cleanedValues = {};
        for (let item in Object.keys(formValues)) {
            if (formValues[item] !== null) {
                cleanedValues[item] = formValues[item];
            }
        }
        console.log(cleanedValues);
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
                    <Form.Control placeholder="MM/DD/YYYY" onChange={getHandleFieldChange('date')}/>
                    <Form.Text id="dateHelpBlock" muted>
                        All dates must be in the form MM/DD/YYYY. Don't forget your slashes!
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
            <Button variant="light" size="lg" block onClick={handleFormSubmit}>
                Submit
            </Button>
        </div>
    );
}

export default MealForm;