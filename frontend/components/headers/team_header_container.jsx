import { connect } from 'react-redux';
import { Router, Link, withRouter } from 'react-router-dom';
import { requestTeam } from '../../actions/team_actions';
import TeamHeader from './team_header';

const mapStateToProps = (state, ownProps) => {
  let teamId = ownProps.match.params.teamId;

  return {
    teamId: teamId,
    team: state.entities.teams[teamId]
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestTeam: (teamId) => dispatch(requestTeam(teamId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamHeader));
