import React from 'react';
import { Link, Router } from 'react-router-dom';


class ProjectMembersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project-members-wrapper">
        <Link to={`/users/${this.props.currentUser.id}`}
        key={Math.random()}>
        <img className="project-member-image"
          key={Math.random()}
          src={this.props.currentUser.profile_image_url}/>
        </Link>
        {
          this.props.members.map(
            member => <Link to={`/users/${member.id}`}
            key={Math.random()}>
            <img className="project-member-image"
              key={Math.random()}
              src={member.profile_image_url}/>
            </Link>
          )
        }
      </div>
    );
  }
}

export default ProjectMembersIndex;
