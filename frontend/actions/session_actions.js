import { postUser, deleteSession, postSession } from '../util/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createNewUser = (formUser) => (dispatch) => postUser(formUser)
  .then(createdUser => dispatch(receiveCurrentUser(createdUser)));

export const login = (formUser) => (dispatch) => postSession(formUser)
  .then(loggedInUser => dispatch(receiveCurrentUser(loggedInUser)));

export const logout = () => (dispatch) => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));
