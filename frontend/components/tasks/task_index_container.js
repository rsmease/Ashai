//utils
import {
    connect
} from 'react-redux';
import {
    withRouter
} from 'react-router-dom';
import _ from 'lodash';

//actions
import {
    requestUser
} from '../../actions/user_actions';
import {
    requestProject
} from '../../actions/project_actions';

//components
import TaskIndex from './task_index';

const mapStateToProps = (state, ownProps) => {

    const defaults = {
        groupType: ownProps.groupType,
        currentUser: state.session.currentUser
    };

    switch (ownProps.groupType) {
        case "currentUser":
            return _.merge({}, defaults, {
                userId: state.session.currentUser.id,
                user: state.session.currentUser
            });
        case "user":
            let userId = ownProps.match.path.params.userId;
            return _.merge({}, defaults, {
                userId: userId,
                user: state.entities.users[userId]
            });
        case "project":
            let projectId = ownProps.match.path.params.projectId;
            return _.merge({}, defaults, {
                projectId: projectId,
                project: state.entities.projects[projectId]
            });
        default:
            return defaults;
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestProject: (projectId) => dispatch(requestProject(projectId)),
    requestUser: (userId) => dispatch(requestUser(userId))
});

export default withRouter(
    connect(null, mapDispatchToProps)(TaskIndex)
);