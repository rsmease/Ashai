import { connect } from 'react-redux';
import { Router, Link, withRouter } from 'react-router-dom';
import { requestProject,
  requestToDeleteProject,
  requestUpdateToProject
} from '../../actions/project_actions';
import ProjectHeader from './project_header';

const mapStateToProps = (state, ownProps) => {
  let projectId = ownProps.match.params.projectId;

  return {
    projectId: projectId,
    project: state.entities.projects[projectId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestProject: (projectId) => dispatch(requestProject(projectId)),
  requestToDeleteProject: (projectId) =>
    dispatch(requestToDeleteProject(projectId)),
  requestUpdateToProject: (projectId) =>
    dispatch(requestUpdateToProject(projectId))
});

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(ProjectHeader));
