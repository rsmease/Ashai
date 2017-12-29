//utils
import _ from 'lodash';
import React from 'react';
import {
    Link,
    Router
} from 'react-router-dom';
import {
    connect
} from 'react-redux';

//components, actions
import {
    logout
} from '../../actions/session_actions';
import HeaderActionIndex from './header_action_index';

const mapStateToProps = (state, ownProps) => ({
    source: ownProps.source,
    currentUser: ownProps.currentUser,
    targetGroup: ownProps.targetGroup,
    currentUserIsOwner: ownProps.currentUserIsOwner
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleDropdown: () => ownProps.toggleDropdown(),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderActionIndex);