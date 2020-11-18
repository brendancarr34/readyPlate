import React from 'react';
import './index.css';
import Header from './Header';
import DayCard from './DayCard';


let Main = () => {
    return (  
    <div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70vh'}}>
         <DayCard/>
      </div>
    </div>
    )
};

export default Main;
