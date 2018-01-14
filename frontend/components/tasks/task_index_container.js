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
    requestProject,
    requestToDeleteProject
} from '../../actions/project_actions';
import {
    createNewTask,
    requestUpdateToTask,
    requestToDeleteTask
} from '../../actions/task_actions';

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
                currentTargetId: state.session.currentUser.id,
                currentTarget: state.session.currentUser
            });
        case "user":
            let currentTargetId = ownProps.match.path.params.userId;
            return _.merge({}, defaults, {
                currentTargetId: currentTargetId,
                currentTarget: state.entities.users[currentTargetId]
            });
        case "project":
            currentTargetId = ownProps.match.path.params.projectId;
            return _.merge({}, defaults, {
                currentTargetId: currentTargetId,
                currentTarget: state.entities.projects[currentTargetId]
            });
        default:
            return defaults;
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestProject: (projectId) => dispatch(requestProject(projectId)),
    requestUser: (userId) => dispatch(requestUser(userId)),
    createNewTask: (formTask) => dispatch(createNewTask(formTask)),
    requestUpdateToTask: (formTask) => dispatch(requestUpdateToTask(formTask)),
    requestToDeleteTask: (taskId) => dispatch(requestToDeleteTask(taskId))
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TaskIndex)
);