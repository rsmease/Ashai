import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import {
  RECEIVE_PROJECT,
  REMOVE_PROJECT
} from '../actions/project_actions';

import {
  addUniqueToArray,
  removeDeleted
} from './selectors';

import _ from 'lodash';

const _nullSession = {
  currentUser: null
};

export default (state = _nullSession, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return _.merge({}, state, { currentUser });
    case RECEIVE_PROJECT:
      addUniqueToArray(action.project, state.currentUser.projects);
      return _.merge({}, state);
    case REMOVE_PROJECT:
      state.currentUser.projects =
        removeDeleted(action.projectId, state.currentUser.projects);
        console.log(state);
      return _.merge({}, state);
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};
