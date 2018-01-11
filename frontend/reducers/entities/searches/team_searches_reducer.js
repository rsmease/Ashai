import {
    RECEIVE_TEAM_SEARCH_RESULTS
} from '../../../actions/search_actions';
import _ from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TEAM_SEARCH_RESULTS:
            const foundTeams = action.foundTeams;
            return _.merge({}, foundTeams);
        default:
            return state;
    }
};