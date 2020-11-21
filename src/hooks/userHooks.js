import { useState, useRef, useEffect } from 'react';
import firebase from "firebase/app";
import 'firebase/auth';
  

let getUser = async (uid) => {
    let meals = firebase.database().ref(`users/${uid}`);
    return meals.once("value").then(function(snapshot) {
        return snapshot.val();
    });
  };
  
  const useUser = (uid) => {
    const [user, setUser] = useState(null);
    const loaded = useRef(false);
    useEffect(() => {
        if (!loaded.current) {
        const getAndSetUser = async () => {
                const fetchedUser = await getUser(uid);
                setUser(fetchedUser);
                loaded.current = true;
            }
            getAndSetUser();
        }
    }, [])
    return user;
  };

  export default useUser;