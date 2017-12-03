import { connect } from 'react-redux';
import { Router, Link, withRouter } from 'react-router-dom';
import { requestTeam,
requestToDeleteTeam,
requestUpdateToTeam } from '../../actions/team_actions';
import TeamHeader from './team_header';

const mapStateToProps = (state, ownProps) => {
  let teamId = ownProps.match.params.teamId;

  return {
    teamId: teamId,
    team: state.entities.teams[teamId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestTeam: (teamId) => dispatch(requestTeam(teamId)),
  requestToDeleteTeam: (teamId) => dispatch(requestToDeleteTeam(teamId)),
  requestUpdateToTeam: (teamId) => dispatch(requestUpdateToTeam(teamId))
});

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(TeamHeader));
