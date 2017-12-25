import React from 'react';
import {
    Link,
    Router
} from 'react-router-dom';
import GlobalHeader from './navigation_header';
import {
    connect
} from 'react-redux';
import {
    logout
} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);