import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewProject } from '../../actions/project_actions';
import NewProjectModal from './new_project_modal';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createNewProject: formProject => dispatch(createNewProject(formProject))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectModal);
