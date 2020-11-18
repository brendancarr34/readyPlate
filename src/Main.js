import React from 'react';
import './index.css';
import Header from './Header';
import DayCard from './DayCard';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import './Main.css';



let Main = () => {
  let date = new Date();
    return (  
    <div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}>
        <DateRangePicker initialSettings={{ startDate: (date.getMonth()+1) + '/'+ date.getDate() +'/' + date.getFullYear()}}>
          <button class="material-button"type="button"><span>Pick Dates</span></button>
        </DateRangePicker>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}>
         <DayCard/>
      </div>
    </div>
    )
};

export default Main;
