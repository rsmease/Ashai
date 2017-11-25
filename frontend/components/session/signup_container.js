import { connect } from 'react-redux';
import { createNewUser, removeAllErrors } from '../../actions/session_actions';
import { requestAllTeams } from '../../actions/team_actions';
import { requestAllUsers } from '../../actions/user_actions';

import SignUp from './signup';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  removeAllErrors: () => dispatch(removeAllErrors()),
  requestAllTeams: () => dispatch(requestAllTeams()),
  requestAllUsers: () => dispatch(requestAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
