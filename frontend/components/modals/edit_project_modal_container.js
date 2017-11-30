import { connect } from 'react-redux';
import { removeAllProjectModalErrors,
         requestUpdateToProject
       } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';
import EditProjectModal from './edit_project_modal';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  project: ownProps.project,
  closeEditProjectModal: ownProps.closeEditProjectModal
});

const mapDispatchToProps = (dispatch) => ({
  requestUpdateToProject: formProject =>
    dispatch(requestUpdateToProject(formProject)),
  removeAllProjectModalErrors: () => dispatch(removeAllProjectModalErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectModal);
