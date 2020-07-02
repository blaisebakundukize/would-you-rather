import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Nav from "./Nav";
import Avatar from "./Avatar";
import logo from "../assets/images/logo.png";

class Layout extends Component {
  render() {
    const { authedUser } = this.props;
    return (
      <>
        <header className='header'>
          <div className='header-content'>
            <img className='logo' alt='Would you rather logo' src={logo} />
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
                      <NavLink to='/auth' activeClassName='active'>
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
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
