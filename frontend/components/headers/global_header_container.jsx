import React from 'react';

import GlobalHeader from './global_header';
import {
    connect
} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser
});


export default connect(mapStateToProps, null)(GlobalHeader);