import React from 'react';
import Modal from 'react-modal';
import onClickOutside from 'react-onclickoutside';
import HeaderActionIndexItem from './header_action_index_item';

class HeaderActionIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    // toggleDisplayClass() {
    //     switch (this.props.source) {
    //         case "global-header-left":
    //             return "global-header-left-action-index";
    //         default:
    //             return "global-header-right-action-index";
    //     }
    // }

    toggleArrowClass() {
        switch (this.props.source) {
            case "global-header-left":
                return "arrow-up-gold";
            default:
                return "arrow-up-blue";
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
                return <div className={`${this.props.source}-action-index`}>
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
                return <div className={`${this.props.source}-action-index`}>
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
            <div className={`${this.props.source}-action-index-alignment-container`}>
                <div className={this.toggleArrowClass()}></div>
                {this.showIndexItems()}
            </div>
        );
    }
}

export default onClickOutside(HeaderActionIndex);