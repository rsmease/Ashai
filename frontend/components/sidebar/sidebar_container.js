import {
    connect
} from 'react-redux';

import Sidebar from './sidebar';

import {
    requestToCloseSidebar,
    requestToOpenSidebar
} from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
    sidebarVisible: state.ui.sidebarVisible
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestToCloseSidebar: () => dispatch(requestToCloseSidebar())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);