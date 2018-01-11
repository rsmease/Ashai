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

    let userId;
    let projectId;
    if (ownProps.match.path.params.userId) {
        userId = ownProps.match.path.params.userId;
        projectId = null;
    } else {
        projectId = ownProps.match.path.params.projectId;
        userId = null;
    }

    const defaults = {
        groupType: ownProps.groupType,
        currentUser: state.session.currentUser
    }

    switch (ownProps.groupType) {
        case "currentUser":
            return _.merge({}, defaults, {
                userId: state.session.currentUser.id,
                user: state.session.currentUser
            })
        case "user":
            return _.merge({}, defaults, {
                userId: ownProps.match.path.params.userId,
                user: state.entities.users[userId]
            })
        case "project":
            return _.merge({}, defaults, {
                projectId: ownProps.match.path.params.projectId,
                project: state.entities.projects[projectId];
            })
        default:
            return defaults;
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestProject: (projectId) => dispatch(requestProject(projectId)),
    requestUser: (userId) => dispatch(requestUser(userId))
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TaskIndex)
);