import React from 'react';
import { Link, Router } from 'react-router-dom';


class TeamSidebarProfiles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-profiles">
        {
          this.props.members.slice(0, 6).map(
            member => <Link to={`/users/${member.id}`}
            key={Math.random()}>
            <img className="sidebar-profile-image"
              key={Math.random()}
              src={member.profile_image_url}/>
            </Link>
          )
        }
      </div>
    );
  }
}

export default TeamSidebarProfiles;
