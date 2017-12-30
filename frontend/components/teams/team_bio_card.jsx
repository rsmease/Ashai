import React from 'react';
import { Link } from 'react-router-dom';

class TeamBioCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const backgroundImage = {
      backgroundImage: `url(${this.props.member.profile_image_url})`
    };

    return (
      <div className="team-index-bio-card" style={backgroundImage}>
        <div className="team-index-bio-card-modal">
          <Link className="team-index-bio-card-link"
            to={`/users/${this.props.member.id}`}>
            <h4 className="team-index-bio-card-title">
              {this.props.member.name}
              <div className="team-index-bio-about-me">Bio</div>
            </h4>
            <p className="team-index-bio-card-bio">
              {this.props.member.bio}
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default TeamBioCard;
