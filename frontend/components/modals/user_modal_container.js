//utils
import {
    connect
} from 'react-redux';

//actions
import {
    removeAllUserModalErrors,
    requestUpdateToUser
} from '../../actions/user_actions';

//components
import UserModal from './user_modal';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors,
    currentUser: state.session.currentUser,
    closeModal: ownProps.closeModal
});

const mapDispatchToProps = (dispatch) => ({
    requestUpdateToUser: formUser =>
        dispatch(requestUpdateToUser(formUser)),
    removeAllUserModalErrors: () => dispatch(removeAllUserModalErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);