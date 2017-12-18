import {
    connect
} from 'react-redux';

import {
    login,
    createNewUser,
    removeAllErrors
} from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
    login: formUser => dispatch(login(formUser)),
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    removeAllErrors: () => dispatch(removeAllErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);