import { RECEIVE_USER_SEARCH_RESULTS,
RECEIVE_PROJECT_SEARCH_RESULTS } from '../actions/search_actions';
import _ from 'lodash';

export default (state = { users: {} }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_SEARCH_RESULTS:
      const foundUsers = action.foundUsers;
      return _.merge({}, { users: foundUsers });
    case RECEIVE_PROJECT_SEARCH_RESULTS:
      const foundProjects = action.foundProjects;
      return _.merge({}, { projects: foundProjects });
    default:
      return state;
  }
};
