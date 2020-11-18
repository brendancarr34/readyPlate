import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './index.css';
import Header from './Header';
import DayCard from './DayCard';
import DatePicker from './DatePicker';
import { dates, group } from './stores.js';
let cardGroup = group;
let cardDates = dates;



let Main = () => {
    return (  
    <div>
      <Container>
        <Row>
          <Col xl>
            <DatePicker/>
          </Col>
        </Row>
        <Row>
          {cardDates.map(cardDate => (
            <Col sm>
              <DayCard cardDate={cardDate} cardGroup={cardGroup} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    )
};

export default Main;
