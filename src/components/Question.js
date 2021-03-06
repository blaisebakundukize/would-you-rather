import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { formatQuestion } from "../utils/helpers";
import Avatar from "./Avatar";

class Question extends Component {
  render() {
    const { id, optionOne, name, avatarURL } = this.props.question;
    const { children, title } = this.props;

    const authorNameAsTitle = (
      <span className='question-title-author'>{name}</span>
    );

    return (
      <div className='question'>
        <div className='question-header'>
          <h3 className='question-title'>
            {title !== "" ? (
              <span>
                {title} {authorNameAsTitle}
              </span>
            ) : (
              <span>{authorNameAsTitle} asked:</span>
            )}
          </h3>
        </div>
        <div className='question-content'>
          <Avatar
            name={name}
            avatarURL={avatarURL}
            classes='question-user-avatar'
          />
          <div className='question-info'>
            {children ? (
              children
            ) : (
              <>
                <h3>Would you rather</h3>
                <p>{optionOne}...</p>
                <Link to={`/question/${id}`}>
                  <button className='btn btn-view-poll'>View Poll</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, questions, users }, { id }) => {
  const question = questions[id];
  return {
    question: question
      ? formatQuestion(question, users[question.author], users[authedUser])
      : null,
  };
};

export default connect(mapStateToProps)(Question);
