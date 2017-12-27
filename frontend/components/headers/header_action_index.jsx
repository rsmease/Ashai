import React from 'react';
import Modal from 'react-modal';
import onClickOutside from 'react-onclickoutside';
import HeaderActionIndexItem from './header_action_index_item';

class HeaderActionIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleDisplayClass() {
        switch (this.props.source) {
            case "global-header-left":
                return "global-header-left-action-index";
            default:
                return "global-header-left-action-index";
        }
    }

    handleClickOutside(e) {
        if (e.target.className === "arrow-up") {
            this.props.closeDropdown();
        }
    }

    showIndexItems() {
        switch (this.props.source) {
            case "global-header-left":
                return <div className={this.toggleDisplayClass()}>
                    <HeaderActionIndexItem
                        source={this.props.source}
                        toggleDropdown={this.props.toggleDropdown}
                        actionTitle="New Task"
                        modalAction={false}
                        otherAction={() => console.log("This feature is in development.")} />
                    <HeaderActionIndexItem
                        source={this.props.source}
                        toggleDropdown={this.props.toggleDropdown}
                        actionTitle="New Project"
                        modalAction={true}
                        otherAction="" />
                </div>;
            case "global-header-right":
                return <div className="nav-user-options">
                    <HeaderActionIndexItem
                        source={this.props.source}
                        toggleDropdown={this.props.toggleDropdown}
                        actionTitle="My Profile Settings..."
                        modalAction={true}
                        otherAction="" />
                    <HeaderActionIndexItem
                        source={this.props.source}
                        toggleDropdown={this.props.toggleDropdown}
                        actionTitle="Logout"
                        modalAction={false}
                        otherAction={this.props.logout} />
                </div>;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="action-index-container-visible">
                <div className="arrow-up-gold"></div>
                {this.showIndexItems()}
            </div>
        );
    }
}

export default onClickOutside(HeaderActionIndex);