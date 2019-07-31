import {FETCH_TOURS, NEW_TOUR } from './types';

  export const fetchTours = () => dispatch => {
    fetch("http://localhost:3000/tours")
    .then(resp => resp.json())
    .then(tours => 
      dispatch({
        type: FETCH_TOURS,
        payload: tours
      })
    );
  };

  export const createTour = (tourData) => dispatch => {
    console.log('action called')
    const token = localStorage.token;
    fetch("http://localhost:3000/tours", {
        method: "POST",
        headers: {
          //only logged in Users can make tours
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ tour: tourData })
      })
      .then(resp => resp.json())
      .then(data => dispatch(loginUser(data.user)
      ))}

      const loginUser = userObj => ({
        type: 'LOGIN_USER',
        payload: userObj
    })