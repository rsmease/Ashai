import { connect } from 'react-redux';
import { requestUpdateToTeam } from '../../actions/team_actions';
import { requestUpdateToProject } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';
import TransferOwnershipModal from './transfer_ownership_modal';
import { searchUsers } from '../../actions/search_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  group: ownProps.group,
  closeTransferOwnershipModal: ownProps.closeTransferOwnershipModal,
  parent: "TransferOwnership"
});

const mapDispatchToProps = (dispatch) => ({
  requestUpdateToTeam: formTeam =>
    dispatch(requestUpdateToTeam(formTeam)),
    requestUpdateToProject: formProject =>
      dispatch(requestUpdateToProject(formProject)),
});

export default connect(mapStateToProps,
  mapDispatchToProps)(TransferOwnershipModal);
