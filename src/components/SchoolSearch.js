import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import useSearch from '../hooks/searchHook.js';

let SchoolSearch = () => {

    const [searchValue, setSearchValue] = useState("");
    useSearch(searchValue);

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
        </div>
    )
}

export default SchoolSearch;