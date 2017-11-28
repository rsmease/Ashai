import { connect } from 'react-redux';
import { removeAllErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { createNewProject } from '../../actions/project_actions';
import NewProjectModal from './new_project_modal';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  createNewProject: formProject => dispatch(createNewProject(formProject)),
  removeAllErrors: () => dispatch(removeAllErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectModal);
