import React from 'react';
import GlobalHeaderContainer from './navigation_header2';

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