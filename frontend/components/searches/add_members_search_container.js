import { connect } from 'react-redux';
import AddMembersSearch from './add_members_search';
import { searchUsers } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
  parent: ownProps.parent,
  currentUser: state.session.currentUser,
  userSearchResults: state.entities.searches.users,
  group: ownProps.group
});

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (query) => dispatch(searchUsers(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMembersSearch);
