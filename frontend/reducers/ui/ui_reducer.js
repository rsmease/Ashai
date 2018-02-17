import _ from 'lodash';
import {
    CLOSE_SIDEBAR,
    OPEN_SIDEBAR
} from '../../actions/ui_actions';

export default (state = {
    sidebarVisible: true
}, action) => {
    switch (action.type) {
        case CLOSE_SIDEBAR:
            return _.merge({}, state, {
                sidebarVisible: false
            });
        case OPEN_SIDEBAR:
            return _.merge({}, state, {
                sidebarVisible: true
            });
        default:
            return _.merge({}, state);
    }
};