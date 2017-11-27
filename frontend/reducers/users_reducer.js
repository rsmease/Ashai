import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';
import _ from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const receivedUser = action.user;
      return _.merge({}, state, {[receivedUser.id]: receivedUser} );
    case RECEIVE_ALL_USERS:
      const users = action.users;
      return _.merge({}, state, users);
    default:
      return state;
  }
};
