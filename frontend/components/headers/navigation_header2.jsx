//utils
import React from 'react';
import { Link, Router, Redirect } from 'react-router-dom';

import UserOptionsIndex from './user_options_index';
import HeaderActionButton from './header_action_button';
import NavBarSearchContainer from '../searches/nav_bar_search_container';

class GlobalHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="task-header-primary">
                <div className="left-links">
                    <Link to="/app" className="header-link">My Tasks</Link>
                    <HeaderActionButton
                        source="global-header-left" />
                </div>
            </div>
        );
    }
}

export default GlobalHeader;