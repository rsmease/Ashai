import { connect } from 'react-redux';
import NavBarSearch from './nav_bar_search';
import { searchUsers, searchProjects } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  userSearchResults: state.entities.searches.users,
  projectSearchResults: state.entities.searches.projects
});

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (query) => dispatch(searchUsers(query)),
  searchProjects: (query) => dispatch(searchProjects(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarSearch);
