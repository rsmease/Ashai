import { connect } from 'react-redux';
import { removeAllTeamModalErrors } from '../../actions/team_actions';
import { withRouter } from 'react-router-dom';
import { createNewTeam } from '../../actions/team_actions';
import NewTeamModal from './new_team_modal';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  closeNewTeamModal: ownProps.closeNewTeamModal
});

const mapDispatchToProps = (dispatch) => ({
  createNewTeam: formTeam => dispatch(createNewTeam(formTeam)),
  removeAllTeamModalErrors: () => dispatch(removeAllTeamModalErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTeamModal);
