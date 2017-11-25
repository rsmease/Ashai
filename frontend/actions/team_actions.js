import { fetchTeam } from '../util/team_util';

export const RECEIVE_TEAM = 'RECEIVE_TEAM';

const receiveTeam = (team) => ({
  type: RECEIVE_TEAM,
  team
});

export const requestTeam = (teamId) => (dispatch) => fetchTeam(teamId)
  .then(fetchedTeam =>dispatch(receiveTeam(fetchedTeam)));
