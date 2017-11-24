import {
  RECEIVE_USER_ERRORS,
  RECEIVE_CURRENT_USER,
  REMOVE_USER_ERRORS
} from '../actions/session_actions';

export const sessionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case REMOVE_USER_ERRORS:
      return [];
    default:
      return state;
  }
};
