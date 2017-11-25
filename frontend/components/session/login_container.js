import { connect } from 'react-redux';
import { login, removeAllErrors } from '../../actions/session_actions';
import { requestAllTeams } from '../../actions/team_actions';
import { requestAllUsers } from '../../actions/user_actions';
import Login from './login';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  login: formUser => dispatch(login(formUser)),
  removeAllErrors: () => dispatch(removeAllErrors()),
  requestAllTeams: () => dispatch(requestAllTeams()),
  requestAllUsers: () => dispatch(requestAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
