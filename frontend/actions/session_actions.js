import { postUser, deleteSession, postSession } from '../util/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const REMOVE_USER_ERRORS = 'REMOVE_USER_ERRORS';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors: errors
});

const removeErrors = () => ({
  type: REMOVE_USER_ERRORS,
});

export const createNewUser = (formUser) => (dispatch) => postUser(formUser)
  .then(createdUser => dispatch(receiveCurrentUser(createdUser)),
  err => (dispatch(receiveErrors(err.responseJSON))));

export const login = (formUser) => (dispatch) => postSession(formUser)
  .then(loggedInUser => dispatch(receiveCurrentUser(loggedInUser)),
  err => (dispatch(receiveErrors(err.responseJSON))));

export const logout = () => (dispatch) => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));

export const removeAllErrors = () => (dispatch) => dispatch(removeErrors());
