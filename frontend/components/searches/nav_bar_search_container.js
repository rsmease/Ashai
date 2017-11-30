import { connect } from 'react-redux';
import NavBarSearch from './nav_bar_search';
import { searchUsers } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  searchResults: state.entities.searches
});

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (query) => dispatch(searchUsers(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarSearch);
