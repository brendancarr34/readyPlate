import firebase from 'firebase';
import 'firebase/database';
import { useRef, useState, useEffect } from 'react';

let getMeals = async (cardGroup, cardDate) => {
    let meals = firebase.database().ref(`group/${cardGroup}/date/${cardDate}`);
    return meals.once("value").then(function(snapshot) {
        return snapshot.val();
    });
};

const useMeals = (cardGroup, cardDate) => {
    const [meals, setMeals] = useState(null);
    const loaded = useRef(false);
    useEffect(() => {
        if (!loaded.current) {
        const getAndSetMeals = async () => {
                const fetchedMeals = await getMeals(cardGroup, cardDate);
                setMeals(fetchedMeals)
                // Commented out so daycards reload when requested.
                // loaded.current = true;
            }
            getAndSetMeals();
        }
    }, [cardDate])
    return meals;
}

export default useMeals;