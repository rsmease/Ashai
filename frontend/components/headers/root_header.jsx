import React from 'react';
import GlobalHeaderContainer from './global_header_container';

class RootHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="root-header">
                <GlobalHeaderContainer />
            </div>
        );
    }
}

export default RootHeader;