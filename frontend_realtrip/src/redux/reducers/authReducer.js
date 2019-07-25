import { LOGIN_USER, LOGOUT_USER } from '../../actions/types';

const initialState = {
  loggedIn: !!localStorage.token,
  currentUser: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

      case LOGIN_USER:
        return {...state, currentUser: action.payload, loggedIn: true}

      case LOGOUT_USER:
        localStorage.removeItem('token')
        return {...state, currentUser: {}, loggedIn: false }

      default: { return state; }
    }
}