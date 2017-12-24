import {
    connect
} from 'react-redux';

import SidebarIndex from './sidebar_index';

const mapStateToProps = (state, ownProps) => {
    if (ownProps.groupType === "team") {
        return {
            groupType: ownProps.groupType,
            currentUser: state.session.currentUser,
            currentUserGroups: state.session.currentUser.teams
        };
    } else {
        return {
            groupType: ownProps.groupType,
            currentUser: state.session.currentUser,
            currentUserGroups: state.session.currentUser.projects
        };
    }
};

export default connect(mapStateToProps, null)(SidebarIndex);