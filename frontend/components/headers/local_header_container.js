import React from 'react';

import LocalHeader from './local_header';
import {
    connect
} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    location: ownProps.location
});


export default connect(mapStateToProps, null)(LocalHeader);