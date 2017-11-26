import React from 'react';
import { Link, Router } from 'react-router-dom';

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <h1>I am the team index</h1>
      </div>
    );
  }
}

export default TeamIndex;
