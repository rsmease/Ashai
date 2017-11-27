import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import TeamBioCard from './team_bio_card';

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
        <div className="bio-card-hover-container">
          <img className="team-index-card-image"
            src={this.props.member.profile_image_url}/>
          <span className="bio-card-container">
            <TeamBioCard member={this.props.member}/>
          </span>
        </div>
        <Link className="team-index-card-link"
          to={`/users/${this.props.member.id}`}
          >View Profile</Link>
      </div>
    );
  }
}

export default TeamIndexItem;
