import React, { Component } from "react";
import { connect } from "react-redux";

import { formatQuestion } from "../utils/helpers";
import QuestionCard from "./QuestionCard";

class Question extends Component {
  render() {
    const {
      id,
      timestamp,
      optionOne,
      optionTwo,
      name,
      avatarURL,
      answer,
    } = this.props.question;
    const { children } = this.props;

    return (
      <QuestionCard name={name} avatarUrl={avatarURL}>
        {children ? (
          children
        ) : (
          <div className='question-info'>
            <h3>Would you rather</h3>
            <p>{optionOne}</p>
            <p>{optionTwo}</p>
            <button>View Poll</button>
          </div>
        )}
      </QuestionCard>
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
