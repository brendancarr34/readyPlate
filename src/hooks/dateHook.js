import firebase from 'firebase';
import {useState, useRef, useEffect } from 'react';

let getDates = async (cardUser) => {
    if(cardUser) {
        let meals = firebase.database().ref(`group/${cardUser.group}/date`);
        return meals.once("value").then(function(snapshot) {
            // console.log(snapshot.val());
            return snapshot.val();
        });
    } else {
      return null;
    }
  };
  
  const useDates = (cardUser) => {
    const [dates, setDates] = useState(null);
    const loaded = useRef(false);
    useEffect(() => {
        if (!loaded.current && cardUser) {
        const getAndSetDate = async () => {
                const fetchedDates = await getDates(cardUser);
                setDates(fetchedDates);
                loaded.current = true;
            }
            getAndSetDate();
        }
    }, [cardUser])
    // console.log(dates);
    return dates;
  }

  export default useDates;