import { RECEIVE_TEAM, RECEIVE_ALL_TEAMS } from '../actions/team_actions';
import _ from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAM:
      const receivedTeam = action.team;
      return _.merge({}, state, { [receivedTeam.id]: receivedTeam });
    case RECEIVE_ALL_TEAMS:
      const allTeams = action.teams;
      return _.merge({}, state, allTeams);
    default:
      return state;
  }
};
