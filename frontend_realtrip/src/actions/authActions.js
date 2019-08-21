import { LOGIN_USER, LOGOUT_USER } from './types';

  export const createUser = user => {
    return dispatch => {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data)
          if (data.message) {
            // Here you should have logic to handle invalid creation of a user.
            // This assumes your Rails API will return a JSON object with a key of
            // 'message' if there is an error with creating the user, i.e. invalid username
          } else {
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
          }
        })
    }
  }

  export const userLoginFetch = user => {
    return dispatch => {
      return fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data)
          if (data.message) {
            // Here you should have logic to handle invalid login credentials.
            // This assumes your Rails API will return a JSON object with a key of
            // 'message' if there is an error
          } else {
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
          }
        })
    }
  }

  export const getProfileFetch = () => {
    return dispatch => {
      const token = localStorage.token;
      if (token) {
        return fetch("http://localhost:3000/profile", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(resp => resp.json())
          .then(data => {
            console.log(data)
            if (data.message) {
              // An error will occur if the token is invalid.
              // If this happens, you may want to remove the invalid token.
              localStorage.removeItem("token")
            } else {
              dispatch(loginUser(data.user))
            }
          })
      }
    }
  }
  export const editUser = (userHash) => {
    console.log(userHash)
    return dispatch => {
      const token = localStorage.token;
      fetch('http://localhost:3000/users/55', {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ user: userHash })
      })
      .then(resp => resp.json())
      .then(res => {
        console.log(res)
        if (res.message) {
          // An error will occur if the token is invalid.
          // If this happens, you may want to remove the invalid token.
        } else {
          dispatch({ type: 'EDIT_USER', payload: res.user });
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