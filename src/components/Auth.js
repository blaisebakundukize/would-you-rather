import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../assets/images/logo.png";

class Auth extends Component {
  state = {
    userId: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({ userId: event.target.value });
  };

  render() {
    const { users } = this.props;
    return (
      <div className='question auth'>
        <div className='auth-header'>
          <h3 className='auth-title center'>
            Welcome to the Would you Rather App!
          </h3>
          <p className='center'>Sign in to Continue</p>
        </div>
        <div className='auth-logo'>
          <img alt='Would you rather logo' src={logo} />
        </div>
        <h3 className='auth-form-title center'>Sign in</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <select className='form-input' onChange={this.handleChange}>
              {users.map((user) => (
                <option className='pink' key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </label>
          <input
            className='btn btn-green btn-submit'
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const userIds = Object.keys(users);
  return {
    users: userIds.map((id) => ({
      id: users[id].id,
      name: users[id].name,
      avatarURL: users[id].avatarURL,
    })),
  };
};

export default connect(mapStateToProps)(Auth);
