import { connect } from 'react-redux';
import { Router, Link, withRouter } from 'react-router-dom';
import { requestUser } from '../../actions/user_actions';
import UserHeader from './user_header';

const mapStateToProps = (state, ownProps) => {
  let userId = ownProps.match.params.userId;

  return {
    userId: userId,
    user: state.entities.users[userId]
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestUser: (userId) => dispatch(requestUser(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserHeader));
