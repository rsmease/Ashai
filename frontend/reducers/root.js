import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
// import entitiesReducer from '.entities';

export default combineReducers({
  // entities: entitiesReducer,
  session: sessionReducer
});
