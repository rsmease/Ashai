import React from 'react';
import Modal from 'react-modal';
import HeaderActionIndexItem from './header_action_index_item';

class HeaderActionIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    showModalContent(modalAction) {
        switch (modalAction) {
            case "New Project":
                return <GroupModalContainer
                    closeModal={this.closeModal}
                    targetGroup={undefined}
                    modalAction="new"
                    groupType="project" />;
            default:
                break;
        }
    }

    showIndexItems() {
        switch (this.props.source) {
            case "global-header-left":
                return <div className="nav-add-dropdown">
                    <HeaderActionIndexItem
                        closeIndexModal={this.props.closeIndexModal}
                        actionTitle="New Task"
                        modalAction={false}
                        otherAction={() => console.log("This feature is in development.")} />
                    <HeaderActionIndexItem
                        closeIndexModal={this.props.closeIndexModal}
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
            <div className="nav-add-dropdown-wrapper">
                <div className="arrow-up"></div>
                {this.showIndexItems()}
            </div>
        );
    }
}

export default HeaderActionIndex;