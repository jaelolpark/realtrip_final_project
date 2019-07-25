import { LOGIN_USER, LOGOUT_USER } from './types';

  export const createTour = tour => {
    return dispatch => {
      fetch("http://localhost:3000/tours", {
        method: "POST",
        headers: {
          //only logged in Users can make tours
          Authorization: localStorage.token,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({tour})
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data)
          if (data.message) {
            // Here you should have logic to handle invalid creation of a user.
            // This assumes your Rails API will return a JSON object with a key of
            // 'message' if there is an error with creating the user, i.e. invalid username
          } else {
            dispatch(loginUser(data.user))
          }
        })
    }
  }


  const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const logoutUser = () => ({
  type: LOGOUT_USER
})