import { fetchUserSearchResults,
fetchProjectSearchResults } from '../util/search_util';

export const RECEIVE_USER_SEARCH_RESULTS = "RECEIVE_USER_SEARCH_RESULTS";
export const RECEIVE_PROJECT_SEARCH_RESULTS = "RECEIVE_PROJECT_SEARCH_RESULTS";

const receiveUserSearchResults = (foundUsers) => ({
  type: RECEIVE_USER_SEARCH_RESULTS,
  foundUsers
});

const receiveProjectSearchResults = (foundProjects) => ({
  type: RECEIVE_PROJECT_SEARCH_RESULTS,
  foundProjects
});

export const searchUsers = (query) => (dispatch) => (
  fetchUserSearchResults(query)
  .then(foundUsers => dispatch(receiveUserSearchResults(foundUsers)))
);

export const searchProjects = (query) => (dispatch) => (
  fetchProjectSearchResults(query)
  .then(foundProjects => dispatch(receiveProjectSearchResults(foundProjects)))
);
