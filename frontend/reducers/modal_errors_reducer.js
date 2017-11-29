import {
  RECEIVE_PROJECT_MODAL_ERRORS,
  RECEIVE_PROJECT,
  REMOVE_MODAL_ERRORS
} from '../actions/project_actions';

import {
  RECEIVE_TEAM,
  RECEIVE_TEAM_MODAL_ERRORS
} from '../actions/team_actions';

export const modalErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PROJECT_MODAL_ERRORS:
      return action.errors;
    case RECEIVE_TEAM_MODAL_ERRORS:
      return action.errors;
    case RECEIVE_PROJECT:
      return [];
    case RECEIVE_TEAM:
      return [];
    case REMOVE_MODAL_ERRORS:
      return [];
    default:
      return state;
  }
};
