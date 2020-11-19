import { useState, useRef, useEffect } from 'react';
import firebase from "firebase/app";
import 'firebase/database';

let getUser = async () => {
    let meals = firebase.database().ref(`users/9718920c-3246-4961-b068-bfa0336125bd`);
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