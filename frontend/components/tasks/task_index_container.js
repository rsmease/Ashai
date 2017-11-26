import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskIndex from './task_index';

const mapStateToProps = (state, ownProps) => {

  let currentUserId;
  let currentProjectId;
  if (ownProps.match.path.params.userId) {
    currentUserId = ownProps.match.path.params.userId;
    currentProjectId = null;
  } else {
    currentProjectId = ownProps.match.path.params.projectId;
    currentUserId = null;
  }

  //also need to pass the user and project by slicing state
  return {
    currentUserId: currentUserId,
    currentProjectId: currentProjectId,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({});

//REMEMBER TO ADD THESE BACK SOON
export default withRouter(
  connect(null, null)(TaskIndex)
);
