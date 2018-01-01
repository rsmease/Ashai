import React from 'react';
import { Link } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

class TeamBioCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const backgroundImage = {
      backgroundImage: `url(${this.props.member.profile_image_url})`
    };

    return (
      <div className="popup-card" style={backgroundImage}>
        <div className="popup-card-fade-background">
          <Link className="popup-card-profile-link"
            to={`/users/${this.props.member.id}`}>
            <MaterialDesign.MdPerson
              className="popup-card-profile-link-icon" />
          </Link>
          <div className="popup-card-title-container">
            <p className="popup-card-title">{this.props.member.name}</p>
            <p className="popup-card-type">Bio</p>
          </div>
          <p className="popup-card-bio">
            {this.props.member.bio}
          </p>
        </div>
      </div>
    );
  }
}

export default TeamBioCard;
