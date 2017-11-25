import { fetchAllUsers } from '../util/user_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const requestAllUsers = () => (dispatch) => fetchAllUsers()
  .then(fetchedUsers => dispatch(receiveAllUsers(fetchedUsers)));
