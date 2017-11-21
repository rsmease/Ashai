import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="session-form-container">
        <h2 className="session-form-header">Sign Up</h2>
        <form className="session-form">
          <label>NAME
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
              />
          </label>
          <br></br>
          <label>EMAIL
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
              />
          </label>
          <br></br>
          <label>PASSWORD
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              />
          </label>
          <br></br>
          <button className="session-form-submit"
            onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
