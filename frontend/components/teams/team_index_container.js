import { connect } from 'react-redux';
import { requestTeam } from '../../actions/team_actions';
import TeamIndex from './team_index';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  teams: state.entities.teams
});

const mapDispatchToProps = (dispatch) => ({
  requestTeam: (teamId) => dispatch(requestTeam(teamId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndex);
