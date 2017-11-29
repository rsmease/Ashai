import { connect } from 'react-redux';
import { requestToDeleteProject } from '../../actions/project_actions';

import Sidebar from './sidebar';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestToDeleteProject: projectId =>
    dispatch(requestToDeleteProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
