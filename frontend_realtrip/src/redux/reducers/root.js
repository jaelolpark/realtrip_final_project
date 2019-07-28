import { combineReducers } from 'redux'
import authReducer from './authReducer'
import tourReducer from './tourReducer'

export default combineReducers({
  auth: authReducer,
  tours: tourReducer
})
