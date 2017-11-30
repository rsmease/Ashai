import { fetchUserSearchResults } from '../util/search_util';

export const RECEIVE_USER_SEARCH_RESULTS = "RECEIVE_USER_SEARCH_RESULTS";

const receiveUserSearchResults = (foundUsers) => ({
  type: RECEIVE_USER_SEARCH_RESULTS,
  foundUsers
});

export const searchUsers = (query) => (dispatch) => (
  fetchUserSearchResults(query)
  .then(foundUsers => dispatch(receiveUserSearchResults(foundUsers)))
);
