import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import DayCard from './DayCard';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
      <Header/>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
         <DayCard/>
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
