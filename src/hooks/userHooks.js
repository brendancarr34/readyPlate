import { useState, useRef, useEffect } from 'react';
import firebase from "firebase/app";
import 'firebase/database';

let getUser = async () => {
    let meals = firebase.database().ref(`users/qSwDu9kdf6d9rgE8aReiTH9mREY2`);
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
  };

  export default useUser;