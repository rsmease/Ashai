//utils
import {
    connect
} from 'react-redux';
import _ from 'lodash';

//components
import SearchBar from './search_bar';

//actions
import {
    searchUsers,
    searchProjects,
    searchTeams
} from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
    let defaults = {
        searchUsers: (query) => dispatch(searchUsers(query))
    };
    switch (ownProps.source) {
        case "global-header":
            return _.merge({}, defaults, {
                searchProjects: (query) => dispatch(searchProjects(query)),
                searchTeams: (query) => dispatch(searchTeams(query))
            });
        case "sidebar-group-members-index":
            return _.merge({}, defaults);
        case "project-members-index":
            return _.merge({}, defaults);
        default:
            return _.merge({}, defaults);
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);