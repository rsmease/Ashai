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
                <NavBarSearchContainer />
                <div className="right-links">
                    <a href="https://www.stackoverflow.com"
                        className="header-link" target="_blank">Help</a>
                    <a href="https://www.linkedin.com/in/ryan-mease-140b473a/"
                        className="upgrade-button"
                        target="_blank">
                        Upgrade</a>
                    <HeaderActionButton
                        source="global-header-right"
                        currentUser={this.props.currentUser} />

                </div>
            </div>
        );
    }
}

export default GlobalHeader;