//utils
import React from 'react';
import Modal from 'react-modal';
import _ from 'lodash';
import onClickOutside from 'react-onclickoutside';

//components
import HeaderActionIndexItem from './header_action_index_item';

class HeaderActionIndex extends React.Component {
    constructor(props) {
        super(props);
    }

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
            case "local-header":
                if (this.props.currentUserIsOwner) {
                    return <div className={`${this.props.source}-action-index`}>
                        <HeaderActionIndexItem
                            source={this.props.source}
                            toggleDropdown={this.props.toggleDropdown}
                            actionTitle={"Manage " + _.capitalize(this.props.entityType) + " Settings"}
                            targetGroup={this.props.targetGroup}
                            modalAction={true}
                            otherAction="" />
                        <HeaderActionIndexItem
                            source={this.props.source}
                            toggleDropdown={this.props.toggleDropdown}
                            targetGroup={this.props.targetGroup}
                            actionTitle={"Transfer " + _.capitalize(this.props.entityType) + " Ownership"}
                            modalAction={false}
                            otherAction={() => console.log("This feature is in development.")} />
                        <HeaderActionIndexItem
                            source={this.props.source}
                            toggleDropdown={this.props.toggleDropdown}
                            targetGroup={this.props.targetGroup}
                            actionTitle={"Delete " + _.capitalize(this.props.entityType)}
                            modalAction={true}
                            otherAction="" />
                    </div>;
                } else {
                    return <div className={`${this.props.source}-action-index`}>
                        <HeaderActionIndexItem
                            source={this.props.source}
                            toggleDropdown={this.props.toggleDropdown}
                            actionTitle={"Leave " + _.capitalize(this.props.entityType)}
                            currentGroup={this.props.currentGroup}
                            modalAction={false}
                            otherAction={() => console.log("This feature is in development.")} />
                    </div>;
                }
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