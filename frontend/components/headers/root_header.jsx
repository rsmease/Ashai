import React from 'react';
import NavigationHeaderContainer from './navigation_header_container';

class RootHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="root-header">
                <NavigationHeaderContainer />
            </div>
        );
    }
}

export default RootHeader;