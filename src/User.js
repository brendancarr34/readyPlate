import React, { useState, useRef, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './index.css';
import Header from './Header';
import DayCard from './DayCard';
import WeekPicker from './WeekPicker';
import { dates, group } from './stores.js';
import firebase from "firebase/app";
import 'firebase/database';
// TO-DO remove this line once pulled from db
// let cardGroup = group;

let getUser = async () => {
  let meals = firebase.database().ref(`users/9718920c-3246-4961-b068-bfa0336125bd`);
  return meals.once("value").then(function(snapshot) {
      return snapshot.val();
  });
};

const useUser = () => {
  const [user, setUser] = useState(null);
  const loaded = useRef(false);
  useEffect(() => {
      if (!loaded.current) {
      const getAndSetUser = async () => {
              const fetchedUser = await getUser();
              setUser(fetchedUser);
              loaded.current = true;
          }
          getAndSetUser();
      }
  }, [])
  return user;
}

let getDates = async (cardUser) => {
  if(cardUser) {
      let meals = firebase.database().ref(`group/${cardUser.group}/date`);
      return meals.once("value").then(function(snapshot) {
          console.log(snapshot.val());
          return snapshot.val();
      });
  } else {
    return null;
  }
};

const useDates = (cardUser) => {
  const [dates, setDates] = useState(null);
  const loaded = useRef(false);
  useEffect(() => {
      if (!loaded.current && cardUser) {
      const getAndSetDate = async () => {
              const fetchedDates = await getDates(cardUser);
              setDates(fetchedDates);
              loaded.current = true;
          }
          getAndSetDate();
      }
  }, [cardUser])
  return dates;
}



let User = () => {
  const cardUser = useUser();
  const cardDates = useDates(cardUser);
  if(!cardUser || !cardDates) {
    return null;
  } else {
    console.log("user:")
    console.log(cardUser);
    console.log("dates:")
    console.log(Object.keys(cardDates));
    return (  
      <div>
        <Container>
          <Row>
            <Col xl>
              <WeekPicker/>
            </Col>
          </Row>
          <Row>
            {Object.keys(cardDates).map(cardDate => (
              <Col sm>
                <DayCard cardDate={cardDate} cardGroup={cardUser.group} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      )
  }
};

export default User;
