import { fetchUsers } from '../util/user_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const requestAllUsers = (users) => (dispatch) => fetchUsers(users)
  .then(fetchedUsers => dispatch(receiveAllUsers(users)));
