import React, { Component } from "react";
import { connect } from "react-redux";

import Avatar from "./Avatar";

class LeaderboardItem extends Component {
  render() {
    const { name, avatarURL, answers, questions } = this.props.user;
    return (
      <div className='leaderboard'>
        <div className='leaderboard-avatar'>
          <Avatar name={name} avatarURL={avatarURL} />
        </div>
        <div className='leaderboard-actions'>
          <h3 className='leaderboard-user question-title-author'>{name}</h3>
          <div className='leaderboard-answers'>
            <p className='leaderboard-result'>
              <span>Answered Questions</span>
              <span>{answers}</span>
            </p>
            <p className='leaderboard-result'>
              <span>Created Questions</span>
              <span>{questions}</span>
            </p>
          </div>
          {/* <div className='leaderboard-questions'>
            
          </div> */}
        </div>
        <div className='leaderboard-score'>
          <div className='leaderboard-score-label'>Score</div>
          <div className='leaderboard-score-total'>{questions + answers}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }, { id }) => {
  const user = users[id];
  return {
    user: user
      ? Object.assign({}, user, {
          answers: Object.keys(user.answers).length,
          questions: user.questions.length,
        })
      : null,
  };
};

export default connect(mapStateToProps)(LeaderboardItem);
