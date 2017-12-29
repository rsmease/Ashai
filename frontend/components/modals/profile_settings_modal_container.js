import {
    connect
} from 'react-redux';
import {
    removeAllUserModalErrors,
    requestUpdateToUser
} from '../../actions/user_actions';
import {
    withRouter
} from 'react-router-dom';
import ProfileSettingsModal from './profile_settings_modal';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    errors: state.errors,
    closeModal: ownProps.closeModal
});

const mapDispatchToProps = (dispatch) => ({
    requestUpdateToUser: formUser =>
        dispatch(requestUpdateToUser(formUser)),
    removeAllUserModalErrors: () => dispatch(removeAllUserModalErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettingsModal);