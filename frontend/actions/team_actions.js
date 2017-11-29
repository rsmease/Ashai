import { fetchTeam, fetchAllTeams, postTeam } from '../util/team_util';

export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const RECEIVE_ALL_TEAMS = 'RECEIVE_ALL_TEAMS';
export const RECEIVE_TEAM_MODAL_ERRORS = 'RECEIVE_TEAM_MODAL_ERRORS';
export const REMOVE_MODAL_ERRORS = 'REMOVE_MODAL_ERRORS';

const receiveTeam = (team) => ({
  type: RECEIVE_TEAM,
  team
});

const receiveAllTeams = (teams) => ({
  type: RECEIVE_ALL_TEAMS,
  teams
});

const receiveTeamModalErrors = (errors) => ({
  type: RECEIVE_TEAM_MODAL_ERRORS,
  errors: errors
});

const removeTeamModalErrors = () => ({
  type: REMOVE_MODAL_ERRORS,
});

export const requestTeam = (teamId) => (dispatch) => fetchTeam(teamId)
  .then(fetchedTeam => dispatch(receiveTeam(fetchedTeam)));

export const requestAllTeams = () => (dispatch) => fetchAllTeams()
  .then(fetchedTeams => dispatch(receiveAllTeams(fetchedTeams)));

export const createNewTeam = (formTeam) => (dispatch) =>
  postTeam(formTeam).then(createdTeam =>
    dispatch(receiveTeam(createdTeam)),
    err => (dispatch(receiveTeamModalErrors(err.responseJSON))));

export const removeAllTeamModalErrors = () => (dispatch) =>
  dispatch(removeTeamModalErrors());
