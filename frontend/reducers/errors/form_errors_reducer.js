import {
    RECEIVE_TASK,
    RECEIVE_TASK_FORM_ERRORS,
    REMOVE_TASK_FORM_ERRORS
} from '../../actions/task_actions';

export const formErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_TASK_FORM_ERRORS:
            return action.errors;
        case RECEIVE_TASK:
            return [];
        case REMOVE_TASK_FORM_ERRORS:
            return [];
        default:
            return state;
    }
};