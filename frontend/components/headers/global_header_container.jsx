import React from 'react';

import GlobalHeader from './navigation_header2';
import {
    connect
} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser
});


export default connect(mapStateToProps, null)(GlobalHeader);