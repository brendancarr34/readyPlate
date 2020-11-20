import { useState, useRef, useEffect } from 'react';
import firebase from "firebase/app";
import 'firebase/auth';

let getSignIn = async (user) => {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
        alert('Wrong Username or Password');
    });
  };

  export default getSignIn;