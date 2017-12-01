import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestProject } from '../../actions/project_actions';
import ProjectTaskIndex from './project_task_index';

const mapStateToProps = (state, ownProps) => {
  let projectId = ownProps.match.params.projectId;
  return {
    projectId: projectId,
    project: state.entities.projects[projectId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestProject: (projectId) => dispatch(requestProject(projectId))
});

//REMEMBER TO ADD THESE BACK SOON
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProjectTaskIndex)
);
