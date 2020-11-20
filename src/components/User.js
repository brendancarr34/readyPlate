import React, { useState, useRef, useEffect } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import '../styles/index.css';
import Header from './Header';
import DayCard from './DayCard';
import WeekPicker from './WeekPicker';
import { dates, group } from '../stores.js';
import firebase from "firebase/app";
import 'firebase/database';
import useUser from '../hooks/userHooks.js'
// TO-DO remove this line once pulled from db
// let cardGroup = group;

// get current week
const getWeek = (curr) => {
  let week = []

  for (let i = 1; i <= 5; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    week.push(day);
  } 
  return week;
}

let User = () => {
  const cardUser = useUser();
  // set default of week to current date and add modifiers
  const [week, setWeek] = useState(getWeek(new Date()));

  const addOneWeek = () => {
    let currentDay = new Date(week[0]);
    let newDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate()+7)
    setWeek(getWeek(newDay));
  }
  const subOneWeek = () => {
    let currentDay = new Date(week[0]);
    let newDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate()-7)
    setWeek(getWeek(newDay));
  };

  if(!cardUser) {
    return null;
  } else {
    // Generate weeklyPlates based on week array
    const weeklyPlates = (new Array(week.length)).fill(0).map((item, index) => (
      <Col sm>
        <DayCard cardDate={week[index]} cardGroup={cardUser.group} />
      </Col>
    ));
    console.log("user:")
    console.log(cardUser);
    console.log("dates:")
    console.log(week);
    return (  
      <div>
          <Row>
            <Col xl style={{marginTop: '2%', marginBottom: '2%', marginRight: '10%', marginLeft: '10%'}}>
              <Button variant="secondary" onClick={() => {subOneWeek()}}>Previous Week</Button>
              <Button variant="secondary" className="float-right" onClick={() => {addOneWeek()}}>Next Week</Button>
            </Col>
          </Row>
          <Row>
            {weeklyPlates}
          </Row>
      </div>
      )
  }
};

export default User;
