import {FETCH_TOURS, NEW_TOUR } from '../../actions/types'

const initialState = {
  tours: [],
  tour: {}
}

export default function reducer(state = initialState, action){
  switch(action.type){
      case FETCH_TOURS:
          return {
            ...state,
            tours: action.payload
          }
      default: 
        return state;
  }
}