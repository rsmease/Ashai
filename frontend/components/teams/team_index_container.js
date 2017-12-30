//utils
import {
    connect
} from 'react-redux';
import {
    withRouter
} from 'react-router-dom';

//actions
import {
    requestTeam
} from '../../actions/team_actions';

//components
import TeamIndex from './team_index';


const mapStateToProps = (state, ownProps) => {

    let currentTeamId = ownProps.match.params.teamId;

    return {
        currentTeamId: currentTeamId,
        currentUser: state.session.currentUser,
        teamId: ownProps,
        team: state.entities.teams[currentTeamId]
    };
};

const mapDispatchToProps = (dispatch) => ({
    requestTeam: (teamId) => dispatch(requestTeam(teamId))
});

export default withRouter
    (connect(mapStateToProps, mapDispatchToProps)(TeamIndex));