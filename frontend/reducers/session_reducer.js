import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import {
  RECEIVE_USER
} from '../actions/user_actions';

import {
  RECEIVE_PROJECT,
  REMOVE_PROJECT
} from '../actions/project_actions';

import {
  RECEIVE_TEAM,
  REMOVE_TEAM
} from '../actions/team_actions';

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
      let currentUser = action.user;
      return _.merge({}, state, { currentUser });
    case RECEIVE_USER:
      if (action.user.id === state.currentUser.id) {
        state.currentUser = action.user;
      }
      return _.merge({}, state);
    case RECEIVE_PROJECT:
      state.currentUser.projects =
        addUniqueToArray(action.project, state.currentUser.projects);
      return _.merge({}, state);
    case RECEIVE_TEAM:
      state.currentUser.teams =
        addUniqueToArray(action.team, state.currentUser.teams);
      return _.merge({}, state);
    case REMOVE_PROJECT:
      state.currentUser.projects =
        removeDeleted(action.projectId, state.currentUser.projects);
      return _.merge({}, state);
    case REMOVE_TEAM:
      state.currentUser.teams =
        removeDeleted(action.teamId, state.currentUser.teams);
      return _.merge({}, state);
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};
