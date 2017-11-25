import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import _ from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      const users = action.users;
      return _.merge({}, state, { users });
    default:
      return state;
  }
};
