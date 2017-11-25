import { connect } from 'react-redux';
import { requestAllTeams } from '../../actions/team_actions';
import { removeAllErrors } from '../../actions/session_actions';
import { requestAllUsers } from '../../actions/user_actions';
import { myTeamsArray } from '../../reducers/selectors';

import Sidebar from './sidebar';

const mapStateToProps = (state, ownProps) => ({
  id: state.session.currentUser.id,
  name: state.session.currentUser.name,
  profileImgURL: state.session.currentUser.profile_image_url,
  myTeamIds: state.session.currentUser.teams_by_id
});

const mapDispatchToProps = (dispatch) => ({
  requestAllTeams: () => dispatch(requestAllTeams()),
  requestAllUsers: () => dispatch(requestAllUsers()),
  removeAllErrors: () => dispatch(removeAllErrors()),
  myTeamsArray: (teams, myTeamIds) => myTeamsArray(teams, myTeamIds)
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
