import React, { useState } from 'react';
import { Form, ListGroup, Button } from 'react-bootstrap';
import useSearch from '../hooks/searchHook.js';
import { debounce } from "throttle-debounce";

let SchoolSearch = () => {

    // auto search for schools and update dropdown list respectively 
    const [searchValue, setSearchValue] = useState("");
    
    const updateSearchValue = (updateString) => {
        setSearchValue(updateString);
    };
    

    const getHandleSearchChange = (event) => {
        const newValue = event.target.value;
        updateSearchValue(newValue);
        updateSeletedSchool(newValue);
    };

    // dropdown list to be updated

    const schools = useSearch(searchValue) || new Array(5).fill("");
    
    const options = schools.slice(0, 3).map((school) => (
        <ListGroup.Item>
            <Button variant='light'  value={school.name} onClick={(event) => {getHandleSchoolChange(event)}}>+</Button>
            &nbsp;
            {school.name}
        </ListGroup.Item>
    ))
    
    // code to change school when list item is clicked
    const [selectedSchool, setSelectedSchool] = useState("");

    const updateSeletedSchool = (updateString) => {
        setSelectedSchool(updateString);
    };

    const getHandleSchoolChange = (event) => {
        const newValue = event.target.value;
        updateSeletedSchool(newValue);
    };

    const getSelectedSchool = () => {
        return selectedSchool;
    }
    
    return (
        <div>
            <Form.Group>
                <Form.Label>University</Form.Label>
                <Form.Control type="text" placeholder="Search Schools" value={selectedSchool} onChange={(event) => {getHandleSearchChange(event);}}/>
            </Form.Group>
            <ListGroup>
                {options}
            </ListGroup>
        </div>
    )
}

export default SchoolSearch;