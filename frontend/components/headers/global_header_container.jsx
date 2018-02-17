import React from 'react';

import GlobalHeader from './global_header';
import {
    connect
} from 'react-redux';

import { requestToOpenSidebar } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestToOpenSidebar: () => dispatch(requestToOpenSidebar())
})


export default connect(mapStateToProps, numapDispatchToProps)(GlobalHeader);