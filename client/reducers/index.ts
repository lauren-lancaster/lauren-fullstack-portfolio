import { combineReducers } from 'redux'

// import stuff from './stuff'
import displayReducer from './display'

export default combineReducers({
  // stuff
  display: displayReducer,
})
