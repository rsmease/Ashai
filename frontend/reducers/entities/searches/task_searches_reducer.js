import {
    RECEIVE_TASK_SEARCH_RESULTS
} from '../../../actions/search_actions';
import _ from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TASK_SEARCH_RESULTS:
            const foundTasks = action.foundTasks;
            return _.merge({}, foundTasks);
        default:
            return state;
    }
};