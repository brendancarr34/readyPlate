import React, { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import useSearch from '../hooks/searchHook.js';

let SchoolSearch = () => {

    const [searchValue, setSearchValue] = useState("");

    const schools = useSearch(searchValue) || new Array(5).fill("");
    
    const options = schools.map((school) => (
        <ListGroup.Item>{school.name}</ListGroup.Item>
    ))

    const updateSearchValue = (updateString) => {
        setSearchValue(updateString);
    };
    

    const getHandleSearchChange = (event) => {
        const newValue = event.target.value;
        updateSearchValue(newValue);
    }
    
    return (
        <div>
            <Form.Group>
                <Form.Label>University</Form.Label>
                <Form.Control type="text" placeholder="Search Schools" onChange={(event) => {getHandleSearchChange(event)}}/>
            </Form.Group>
            <ListGroup>
                {options}
            </ListGroup>
        </div>
    )
}

export default SchoolSearch;