import { connect } from 'react-redux';
import NavBarSearch from './nav_bar_search';
import { searchUsers,
          searchProjects,
          searchTeams } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  userSearchResults: state.entities.searches.users,
  projectSearchResults: state.entities.searches.projects,
  teamSearchResults: state.entities.searches.teams
});

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (query) => dispatch(searchUsers(query)),
  searchProjects: (query) => dispatch(searchProjects(query)),
  searchTeams: (query) => dispatch(searchTeams(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarSearch);
