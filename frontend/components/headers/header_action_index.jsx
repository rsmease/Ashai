import React from 'react';
import Modal from 'react-modal';
import HeaderActionIndexItem from './header_action_index_item';

class HeaderActionIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalOpen: true });
    }

    closeModal() {
        this.setState({ modalOpen: false });
    }

    toggleDropdownFeatures() {
        switch (this.props.source) {
            case "global-header-left":
                return <div className="nav-add-dropdown-wrapper">
                    <div className="arrow-up"></div>
                    <div className="nav-add-dropdown">
                        <HeaderActionIndexItem
                            action={() => console.log("This feature is in development.")}
                            actionName="New Task" />
                        <HeaderActionIndexItem
                            action={this.openModal()}
                            actionName="New Project" />
                    </div>
                </div>;
            case "global-header-right":
                return undefined;
            case "local-header":
                return undefined;
            default:
                return undefined;
        }
    }

    render() {
        return (
            <div>

                {this.toggleDropdownFeatures()}
            </div>
        );
    }
}

export default HeaderActionIndex;