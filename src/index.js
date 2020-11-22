import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import User from './components/User';
import Header from './components/Header';
import Chef from './components/Chef'
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import { firebaseConfig} from './stores.js';
import firebase from "firebase/app";
import 'firebase/database';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
firebase.initializeApp(firebaseConfig);

const Index = () => {


  return (
    <React.StrictMode>
      <Router basename="/">
        <Switch>
          <Route path="/profile">
            <Header/>
            <Profile/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/chef">
            <Header/>
            <Chef/>
          </Route>
          <Route path="/">
            <Header/>
            <User/>
          </Route>
        
        </Switch>
      </Router>
    </React.StrictMode>
  );

}

ReactDOM.render(<Index/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
