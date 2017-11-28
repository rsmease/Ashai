import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskIndex from './task_index';
import { requestUser } from '../../actions/user_actions';
import { requestProject } from '../../actions/project_actions';

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

  //also need to pass the user and project by slicing state

  if (projectId === null) {
    return {
      userId: userId,
      user: state.entitles.users[userId],
      projectId: null,
      project: null
    };
  } else {
    return {
      projectId: projectId,
      project: state.entitles.project[projectId],
      userId: null,
      user: null
    };
  }
};

const mapDispatchToProps = (dispatch) => ({
  requestProject: (projectId) => dispatch(requestProject(projectId)),
  requestUser: (userId) => dispatch(requestUser(userId))
});

//REMEMBER TO ADD THESE BACK SOON
export default withRouter(
  connect(null, null)(TaskIndex)
);
