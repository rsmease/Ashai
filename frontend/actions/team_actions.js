import { fetchTeam, fetchAllTeams } from '../util/team_util';

export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const RECEIVE_ALL_TEAMS = 'RECEIVE_ALL_TEAMS';

const receiveTeam = (team) => ({
  type: RECEIVE_TEAM,
  team
});

const receiveAllTeams = (teams) => ({
  type: RECEIVE_ALL_TEAMS,
  teams
});

export const requestTeam = (teamId) => (dispatch) => fetchTeam(teamId)
  .then(fetchedTeam => dispatch(receiveTeam(fetchedTeam)));

export const requestAllTeams = () => (dispatch) => fetchAllTeams()
  .then(fetchedTeams => dispatch(receiveAllTeams(fetchedTeams)));
