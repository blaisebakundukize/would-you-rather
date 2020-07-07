import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Nav from "./Nav";
import Avatar from "./Avatar";
import logo from "../assets/images/logo.png";
import { logout } from "../actions/authedUser";

class Layout extends Component {
  handleLogout = () => {
    this.props.dispatch(logout());
  };
  render() {
    const { authedUser } = this.props;
    return (
      <>
        <header className='header'>
          <div className='header-content'>
            <img
              className='header-logo'
              alt='Would you rather logo'
              src={logo}
            />
            <div className='header-nav'>
              {<Nav />}
              {authedUser && (
                <div className='header-user'>
                  <div className='header-user-info'>
                    <span className='header-user-name'>
                      Hello, {authedUser.name}
                    </span>
                    <Avatar
                      name={authedUser.name}
                      avatarURL={authedUser.avatarURL}
                      classes='header-user-avatar'
                    />
                  </div>
                  <nav className='nav'>
                    <ul>
                      <li>
                        <NavLink
                          to='/auth'
                          activeClassName='active'
                          onClick={this.handleLogout}
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </header>
        <main className='container'>{this.props.children}</main>
      </>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    authedUser: authedUser !== null ? users[authedUser] : null,
  };
};

export default connect(mapStateToProps)(Layout);
