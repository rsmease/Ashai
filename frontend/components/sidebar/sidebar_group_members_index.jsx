//utils
import React from 'react';

//components
import AddMemberButton from '../searches/add_member_button';
import SidebarGroupMembersIndexItem from './sidebar_group_members_index_item';

class SidebarGroupMembersIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
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

    render() {
        return (
            <div className="sidebar-group-members-index">
                {
                    this.props.group.members.slice(0, 5).map((member) => (
                        <SidebarGroupMembersIndexItem
                            key={Math.random()}
                            member={member} />
                    ))
                }
                <AddMemberButton
                    group={this.props.group}
                    groupType={this.props.groupType}
                    source={"sidebar-group-members-index"} />
            </div>
        );
    }
}

export default SidebarGroupMembersIndex;