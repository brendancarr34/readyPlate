import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import User from './components/User';
import Header from './components/Header';
import Chef from './components/Chef'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { firebaseConfig} from './stores.js';
import firebase from "firebase/app";
import 'firebase/database';
import Login from './components/Login';
import SignUp from './components/SignUp';
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
          <Login/>
        </Route>
        <Route path="/signup">
          <SignUp/>
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
