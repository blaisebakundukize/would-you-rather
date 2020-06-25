import React, { Component } from "react";
import { connect } from "react-redux";

import Question from "./Question";
import { formatQuestion } from "../utils/helpers";
import PeekOption from "./PeekOption";
import QuestionResult from "./QuestionResult";

class QuestionPage extends Component {
  onSubmitOption = (option) => {
    console.log(option);
  };
  render() {
    const question = this.props.question;
    if (question === null) {
      return <p className='center'>Question not found</p>;
    }
    const { id, optionOne, optionTwo, answer, name } = question;
    const options = { optionOne: optionOne.text, optionTwo: optionTwo.text };

    const titleQuestion = answer !== null ? "Asked by " : null;

    return (
      <div className='main-content'>
        <Question id={id} title={titleQuestion}>
          {answer === null ? (
            <PeekOption
              options={options}
              onSubmitOption={this.onSubmitOption}
            />
          ) : (
            <QuestionResult
              options={{ optionOne, optionTwo }}
              answer={answer}
            />
          )}
        </Question>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, authedUser, users }, props) => {
  const { id } = props.match.params;
  const question = questions[id];
  const formattedQuestion = question
    ? formatQuestion(question, users[question.author], users[authedUser])
    : null;
  return {
    question: formattedQuestion
      ? Object.assign({}, formattedQuestion, {
          optionOne: question.optionOne,
          optionTwo: question.optionTwo,
        })
      : null,
  };
};

export default connect(mapStateToProps)(QuestionPage);
