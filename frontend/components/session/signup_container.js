import { connect } from 'react-redux';
import { createNewUser, removeAllErrors } from '../../actions/session_actions';
import SignUp from './signup';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  removeAllErrors: () => dispatch(removeAllErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
