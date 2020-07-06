import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../assets/images/logo.png";
import { handleReceiveUsers } from "../actions/users";
import { login } from "../actions/authedUser";

class Auth extends Component {
  state = {
    userId: "",
  };

  componentDidMount() {
    this.props.dispatch(handleReceiveUsers());
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { userId } = this.state;
    this.props.dispatch(login(userId));
    this.props.history.replace("/");
  };

  handleChange = (event) => {
    this.setState({ userId: event.target.value });
  };

  render() {
    const { users } = this.props;
    const { userId } = this.state;
    let loginForm = "loading form...";
    if (users !== null) {
      const options = [];
      users.forEach((user) => {
        options.push(
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        );
      });
      loginForm = (
        <form onSubmit={this.handleSubmit}>
          <label>
            <select
              className='form-input select-placeholder'
              onChange={this.handleChange}
              value={userId}
              required
            >
              <option key={0} value='' disabled>
                Select User
              </option>
              {options}
            </select>
          </label>
          <input
            className='btn btn-green btn-submit'
            disabled={userId === ""}
            type='submit'
            value='Submit'
          />
        </form>
      );
    }

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
        {loginForm}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const userIds = Object.keys(users);
  return {
    users: userIds
      ? userIds.map((id) => ({
          id: users[id].id,
          name: users[id].name,
          avatarURL: users[id].avatarURL,
        }))
      : null,
  };
};

export default connect(mapStateToProps)(Auth);
