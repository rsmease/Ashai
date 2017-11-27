import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';

class TeamBioCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const backgroundImage = {
      backgroundImage: `url(${this.props.member.profile_image_url})`
    };


    return(
      <div className="team-index-bio-card" style={backgroundImage}>
        <div className="team-index-bio-card-modal">
          <h4 className="team-index-bio-card-title">
            {this.props.member.name}
            <div className="team-index-bio-about-me">Bio</div>
          </h4>
          <p className="team-index-bio-card-bio">
            {this.props.member.bio}
          </p>
        </div>
      </div>
    );
  }
}

export default TeamBioCard;
