import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';

class TeamIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="team-index-card">
        <h4 className="team-index-card-title">
          {this.props.member.name}
        </h4>
        <img className="team-index-card-image"
          src={this.props.member.profile_image_url}/>
        <Link className="team-index-card-link"
          to={`/users/${this.props.member.id}`}
          >View Profile</Link>
      </div>
    );
  }
}

export default TeamIndexItem;
