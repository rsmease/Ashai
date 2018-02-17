import {
    connect
} from 'react-redux';

import Sidebar from './sidebar';

const mapStateToProps = (state, ownProps) => ({
    sidebarVisible: state.ui.sidebarVisible
});

export default connect(mapStateToProps, null)(Sidebar);