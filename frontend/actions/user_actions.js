import { fetchAllUsers, fetchUser, updateUser } from '../util/user_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_MODAL_ERRORS = 'RECEIVE_USER_MODAL_ERRORS';
export const REMOVE_MODAL_ERRORS = 'REMOVE_MODAL_ERRORS';

const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveUserModalErrors = (errors) => ({
  type: RECEIVE_USER_MODAL_ERRORS,
  errors: errors
});

const removeUserModalErrors = () => ({
  type: REMOVE_MODAL_ERRORS,
});

export const requestAllUsers = () => (dispatch) => fetchAllUsers()
  .then(fetchedUsers => dispatch(receiveAllUsers(fetchedUsers)));

export const requestUser = (userId) => (dispatch) => fetchUser(userId)
  .then(fetchedUser => dispatch(receiveUser(fetchedUser)));

export const requestUpdateToUser = (userFormData) => (dispatch) => (
  updateUser(userFormData)
  .then(updatedUser => dispatch(receiveUser(updatedUser)),
  err => (dispatch(receiveUserModalErrors(err.responseJSON))))
);

export const removeAllUserModalErrors = () => (dispatch) =>
  dispatch(removeUserModalErrors());
