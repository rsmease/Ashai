import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Demo from './demo';

const mapDispatchToProps = (dispatch) => ({
  login: formUser => dispatch(login(formUser))
});

export default connect(null, mapDispatchToProps)(Demo);
