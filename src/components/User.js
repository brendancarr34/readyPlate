import React, { useState, useRef, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
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
  let week = getWeek(new Date());
  if(!cardUser) {
    return null;
  } else {
    console.log("user:")
    console.log(cardUser);
    console.log("dates:")
    return (  
      <div>
          <Row>
            <Col xl>
              <WeekPicker></WeekPicker>
              {/* <div><br/><br/><br/></div> */}
            </Col>
          </Row>
          <Row>
            {week.map(cardDate => (
              <Col sm>
                <DayCard cardDate={cardDate} cardGroup={cardUser.group} />
              </Col>
            ))}
          </Row>
      </div>
      )
  }
};

export default User;
