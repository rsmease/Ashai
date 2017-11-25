import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { removeAllErrors } from '../../actions/session_actions';
import { requestAllTeams } from '../../actions/team_actions';
import { requestAllUsers } from '../../actions/user_actions';
import Demo from './demo';

const mapDispatchToProps = (dispatch) => ({
  login: formUser => dispatch(login(formUser)),
  requestAllTeams: () => dispatch(requestAllTeams()),
  requestAllUsers: () => dispatch(requestAllUsers())
});

export default connect(null, mapDispatchToProps)(Demo);
