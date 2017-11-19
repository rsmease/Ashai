import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SignUp from './signup';

const mapDispatchToProps = (dispatch) => ({
  createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(null, mapDispatchToProps)(SignUp);
