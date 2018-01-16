import {
    fetchUserSearchResults,
    fetchProjectSearchResults,
    fetchTeamSearchResults,
    fetchTaskSearchResults
} from '../util/search_util';

export const RECEIVE_USER_SEARCH_RESULTS = "RECEIVE_USER_SEARCH_RESULTS";
export const RECEIVE_PROJECT_SEARCH_RESULTS = "RECEIVE_PROJECT_SEARCH_RESULTS";
export const RECEIVE_TEAM_SEARCH_RESULTS = "RECEIVE_TEAM_SEARCH_RESULTS";
export const RECEIVE_TASK_SEARCH_RESULTS = "RECEIVE_TASK_SEARCH_RESULTS";

const receiveUserSearchResults = (foundUsers) => ({
    type: RECEIVE_USER_SEARCH_RESULTS,
    foundUsers
});

const receiveProjectSearchResults = (foundProjects) => ({
    type: RECEIVE_PROJECT_SEARCH_RESULTS,
    foundProjects
});

const receiveTeamSearchResults = (foundTeams) => ({
    type: RECEIVE_TEAM_SEARCH_RESULTS,
    foundTeams
});

const receiveTaskSearchResults = (foundTasks) => ({
    type: RECEIVE_TASK_SEARCH_RESULTS,
    foundTasks
});

export const searchUsers = (query) => (dispatch) => (
    fetchUserSearchResults(query)
    .then(foundUsers => dispatch(receiveUserSearchResults(foundUsers)))
);

export const searchProjects = (query) => (dispatch) => (
    fetchProjectSearchResults(query)
    .then(foundProjects => dispatch(receiveProjectSearchResults(foundProjects)))
);

export const searchTeams = (query) => (dispatch) => (
    fetchTeamSearchResults(query)
    .then(foundTeams => dispatch(receiveTeamSearchResults(foundTeams)))
);

export const searchTasks = (query) => (dispatch) => (
    fetchTaskSearchResults(query)
    .then(foundTasks => dispatch(receiveTaskSearchResults(foundTasks)))
);