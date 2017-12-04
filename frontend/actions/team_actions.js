import { fetchTeam,
         fetchAllTeams,
         postTeam,
         updateTeam,
         deleteTeam,
         postTeamMembership } from '../util/team_util';

export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const RECEIVE_ALL_TEAMS = 'RECEIVE_ALL_TEAMS';
export const RECEIVE_TEAM_MODAL_ERRORS = 'RECEIVE_TEAM_MODAL_ERRORS';
export const REMOVE_MODAL_ERRORS = 'REMOVE_MODAL_ERRORS';
export const REMOVE_TEAM = 'REMOVE_TEAM';
export const RECEIVE_TEAM_MEMBERSHIP = 'RECEIVE_TEAM_MEMBERSHIP';

const receiveTeam = (team) => ({
  type: RECEIVE_TEAM,
  team
});

const receiveAllTeams = (teams) => ({
  type: RECEIVE_ALL_TEAMS,
  teams
});

const removeTeam = (team) => ({
  type: REMOVE_TEAM,
  teamId: team.id
});

const receiveTeamMembership = (teamMembership) => ({
  type: RECEIVE_TEAM_MEMBERSHIP,
  memberId: teamMembership.member_id,
  team_id: teamMembership.team_id
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

export const requestUpdateToTeam = (teamFormData) => (dispatch) => (
  updateTeam(teamFormData)
  .then(updatedTeam => dispatch(receiveTeam(updatedTeam)),
  err => (dispatch(receiveTeamModalErrors(err.responseJSON))))
);

export const requestToDeleteTeam = (teamId) => (dispatch) =>
  deleteTeam(teamId).then((deletedTeam) =>
    dispatch(removeTeam(deletedTeam)));

export const createNewTeamMembership = (teamMembershipRequest) => (dispatch) =>
  postTeamMembership(teamMembershipRequest).then(updatedTeam =>
  dispatch(receiveTeam(updatedTeam)));

export const removeAllTeamModalErrors = () => (dispatch) =>
  dispatch(removeTeamModalErrors());
