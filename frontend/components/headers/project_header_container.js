import { connect } from 'react-redux';
import { Router, Link, withRouter } from 'react-router-dom';
import { requestProject } from '../../actions/project_actions';
import ProjectHeader from './project_header';

const mapStateToProps = (state, ownProps) => {
  let projectId = ownProps.match.params.projectId;

  return {
    projectId: projectId,
    project: state.entities.projects[projectId]
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestProject: (projectId) => dispatch(requestProject(projectId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectHeader));
