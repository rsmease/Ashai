import React from 'react';
import Modal from 'react-modal';
import onClickOutside from 'react-onclickoutside';
import HeaderActionIndexItem from './header_action_index_item';

class HeaderActionIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    togglePositionClass() {
        switch (this.props.source) {
            case "global-header-left":
                return "global-header-left-dropdown";
            default:
                break;
        }
    }

    handleClickOutside(e) {
        if (e.target.className === "arrow-up") {
            console.log("Firing");
            this.props.closeDropdown();
        }
    }

    showIndexItems() {
        switch (this.props.source) {
            case "global-header-left":
                return <div className="nav-add-dropdown">
                    <HeaderActionIndexItem
                        closeDropdown={this.props.closeDropdown}
                        actionTitle="New Task"
                        modalAction={false}
                        otherAction={() => console.log("This feature is in development.")} />
                    <HeaderActionIndexItem
                        closeDropdown={this.props.closeDropdown}
                        actionTitle="New Project"
                        modalAction={true}
                        otherAction="" />
                </div>;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="action-index-container-visible">
                <div className="arrow-up"></div>
                {this.showIndexItems()}
            </div>
        );
    }
}

export default onClickOutside(HeaderActionIndex);