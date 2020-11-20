import { useState, useRef, useEffect } from 'react';
import firebase from "firebase/app";
import 'firebase/auth';

let getSignUp = async (user) => {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((user) => {
        console.log(user);
        return user;
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
        alert('This user already exists.');
    });
  };

  export default getSignUp;