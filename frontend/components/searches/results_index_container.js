//utils
import {
    connect
} from 'react-redux';
import _ from 'lodash';

//components
import ResultsIndex from './results_index2';

//map slices of state as arrays for limited rendering using Array.slice();
const mapStateToProps = (state, ownProps) => {
    let defaults = {
        currentUser: state.session.currentUser,
        userSearchResults: Object.values(state.entities.searches.users)
    };
    switch (ownProps.source) {
        case "global-header":
            return _.merge({}, defaults, {
                projectSearchResults: Object.values(state.entities.searches.projects),
                teamSearchResults: Object.values(state.entities.searches.teams)
            });
        case "sidebar-group-members-index":
            return _.merge({}, defaults, {
                group: ownProps.group
            });
        case "project-members-index":
            return _.merge({}, defaults, {
                group: ownProps.group
            });
        default:
            return defaults;
    }
};

export default connect(mapStateToProps, null)(ResultsIndex);