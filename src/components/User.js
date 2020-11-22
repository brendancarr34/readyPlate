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

let User = () => {

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

  const today = new Date();

  let uid = "";
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      uid = user.uid;
    } else {
        window.location.href="/login";
    }
  });

  const cardUser = useUser(uid);
  // set default of week to current date and add modifiers
  const [week, setWeek] = useState(getWeek(new Date(today.getFullYear(), today.getMonth(), today.getDate())));

  const addOneWeek = () => {
    let currentDay = new Date(week[0]);
    let newDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate()+7);
    setWeek(getWeek(newDay));
  }
  const subOneWeek = () => {
    let currentDay = new Date(week[0]);
    let newDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate()-7);
    setWeek(getWeek(newDay));
  };

  if(!cardUser) {
    return null;
  } else {
    // Generate weeklyPlates based on week array
    const weeklyPlates = (new Array(week.length)).fill(0).map((item, index) => (
      <Col sm>
        <DayCard cardDate={week[index]} cardGroup={Object.entries(cardUser)[0][1].group} />
      </Col>
    ));
    console.log("user:")
    console.log(Object.entries(cardUser)[0][1].group);
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
