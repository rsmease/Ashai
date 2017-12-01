import { connect } from 'react-redux';
import { removeAllUserModalErrors,
         requestUpdateToUser
       } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import EditUserModal from './edit_user_modal';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  closeEditUserModal: ownProps.closeEditUserModal
});

const mapDispatchToProps = (dispatch) => ({
  requestUpdateToUser: formUser =>
    dispatch(requestUpdateToUser(formUser)),
  removeAllUserModalErrors: () => dispatch(removeAllUserModalErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserModal);
