import React from 'react';
import { withRouter } from 'react-router-dom';
import GlobalHeaderContainer from './global_header_container';
import LocalHeaderContainer from './local_header_container';

class RootHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="root-header">
                <GlobalHeaderContainer />
                <LocalHeaderContainer
                    location={this.props.match.url.slice(1)} />
            </div>
        );
    }
}

export default withRouter(RootHeader);