import { RECEIVE_PROJECT_SEARCH_RESULTS } from '../actions/search_actions';
import _ from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT_SEARCH_RESULTS:
      const foundProjects = action.foundProjects;
      return _.merge({}, foundProjects);
    default:
      return state;
  }
};
