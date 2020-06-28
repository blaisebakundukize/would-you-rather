import React, { Component } from "react";
import { connect } from "react-redux";

import LeaderboardItem from "./LeaderboardItem";

class Leaderboard extends Component {
  render() {
    const { userIds } = this.props;
    return (
      <div className='container'>
        <ul className='leaderboard-list'>
          {userIds.map((id) => (
            <li key={id}>
              <LeaderboardItem id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    userIds: Object.keys(users).sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        users[b].questions.length -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    ),
  };
};

export default connect(mapStateToProps)(Leaderboard);
