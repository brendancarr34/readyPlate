import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import User from './User';
import Header from './Header';
import Chef from './Chef'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { firebaseConfig} from './stores.js';
import firebase from "firebase/app";
import 'firebase/database';
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Router>
      <Switch>
        <Route path="/profile">
          {/* Route to About ?? */}
        </Route>
        <Route path="/login">
          {/* Route to main */}
        </Route>
        <Route path="/chef">
          <Chef/>
        </Route>
        <Route path="/">
          <User/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
