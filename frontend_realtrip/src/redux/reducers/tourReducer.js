import {FETCH_TOURS, NEW_TOUR } from '../../actions/types'

const initialState = {
  tour: {}
}

export default function reducer(state = initialState, action){
  switch(action.type){
      case "NEW_TOUR":
          return{...state, tour: action.payload}
      default: { return state; }
  }
}