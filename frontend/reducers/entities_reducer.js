import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import teamsReducer from './teams_reducer';

export default combineReducers({
  users: usersReducer,
  teams: teamsReducer
});
