import { connect } from 'react-redux';
import { removeAllModalErrors } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';
import { createNewProject } from '../../actions/project_actions';
import NewProjectModal from './new_project_modal';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  closeNewProjectModal: ownProps.closeNewProjectModal
});

const mapDispatchToProps = (dispatch) => ({
  createNewProject: formProject => dispatch(createNewProject(formProject)),
  removeAllModalErrors: () => dispatch(removeAllModalErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectModal);
