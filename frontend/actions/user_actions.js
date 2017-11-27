import { fetchAllUsers, fetchUser } from '../util/user_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const requestAllUsers = () => (dispatch) => fetchAllUsers()
  .then(fetchedUsers => dispatch(receiveAllUsers(fetchedUsers)));

export const requestUser = (userId) => (dispatch) => fetchUser(userId)
  .then(fetchedUser => dispatch(receiveUser(fetchedUser)));
