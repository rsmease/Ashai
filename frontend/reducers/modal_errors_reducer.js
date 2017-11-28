import {
  RECEIVE_MODAL_ERRORS,
  RECEIVE_PROJECT,
  REMOVE_MODAL_ERRORS
} from '../actions/project_actions';

export const modalErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_MODAL_ERRORS:
      return action.errors;
    case RECEIVE_PROJECT:
      return [];
    case REMOVE_MODAL_ERRORS:
      return [];
    default:
      return state;
  }
};
