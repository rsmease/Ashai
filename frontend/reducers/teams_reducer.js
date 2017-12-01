import { RECEIVE_TEAM,
         RECEIVE_ALL_TEAMS,
         REMOVE_TEAM } from '../actions/team_actions';

import { RECEIVE_USER } from '../actions/user_actions';
import { updateMember } from './selectors';

import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TEAM:
      const receivedTeam = action.team;
      return _.merge({}, state, {[receivedTeam.id]: receivedTeam} );
    case RECEIVE_ALL_TEAMS:
      const allTeams = action.teams;
      return _.merge({}, state, allTeams);
    case RECEIVE_USER:
      return _.merge({}, state);
    case REMOVE_TEAM:
      let newState = _.merge({}, state);
      delete newState[action.teamId];
      return newState;
    default:
      return state;
  }
};
