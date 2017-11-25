import { RECEIVE_TEAM } from '../actions/team_actions';
import _ from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAM:
      const receivedTeam = action.team;
      return _.merge({}, state, { [receivedTeam.id]: receivedTeam });
    default:
      return state;
  }
};
