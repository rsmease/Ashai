//utils
import React from 'react';
import { Link } from 'react-router-dom';

//components
import TeamBioCard from './team_bio_card';

class TeamIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team-index-card w3-animate-opacity">
        <h4 className="team-index-card-title">
          {this.props.member.name}
        </h4>
        <div className="bio-card-hover-container">
          <img className="team-index-card-image"
            src={this.props.member.profile_image_url} />
          <div className="bio-card-container">
            <TeamBioCard member={this.props.member} />
          </div>
        </div>
        <Link className="team-index-card-link"
          to={`/users/${this.props.member.id}`}
        >Click To View Profile</Link>
      </div>
    );
  }
}

export default TeamIndexItem;
