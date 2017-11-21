import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

import Login from './login';
import LogoHeader from '../headers/splash_header/logo_header';

const mapDispatchToProps = (dispatch) => ({
  login: formUser => dispatch(login(formUser))
});

export default connect(null, mapDispatchToProps)(Login);
