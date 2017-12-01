import { connect } from 'react-redux';
import { removeAllTeamModalErrors,
         requestUpdateToTeam
       } from '../../actions/team_actions';
import { withRouter } from 'react-router-dom';
import EditTeamModal from './edit_team_modal';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  team: ownProps.team,
  closeEditTeamModal: ownProps.closeEditTeamModal
});

const mapDispatchToProps = (dispatch) => ({
  requestUpdateToTeam: formTeam =>
    dispatch(requestUpdateToTeam(formTeam)),
  removeAllTeamModalErrors: () => dispatch(removeAllTeamModalErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTeamModal);
