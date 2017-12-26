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
    createNewProject
} from '../../actions/project_actions';
import {
    logout
} from '../../actions/session_actions';
import HeaderActionIndex from './header_action_index';

const mapStateToProps = (state, ownProps) => {
    const defaults = {
        source: ownProps.source
    };
    switch (ownProps.source) {
        case "global-header-left":
            return _.merge({}, defaults, {});
        case "global-header-right":
            return _.merge({}, defaults, {});
        case "local-header":
            return _.merge({}, defaults, {});
        default:
            return _.merge({}, defaults, {});
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const defaults = {
        closeIndexModal: () => ownProps.closeIndexModal()
    };
    switch (ownProps.source) {
        case "global-header-left":
            return _.merge({}, defaults, {
                createNewProject: formProject => dispatch(createNewProject(formProject))
            });
        case "global-header-right":
            return _.merge({}, defaults, {
                logout: () => dispatch(logout())
            });
        case "local-header":
            return _.merge({}, defaults, {});
        default:
            return _.merge({}, defaults, {});
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderActionIndex);