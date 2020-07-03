import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { addQuestionToUser, addQuestionVoteToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_VOTE = "ADD_QUESTION_VOTE";

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

export const addQuestionVote = (authedUser, qid, answer) => ({
  type: ADD_QUESTION_VOTE,
  qid,
  answer,
  authedUser,
});

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    question["author"] = authedUser;
    dispatch(showLoading());
    return saveQuestion(question)
      .then((question) => dispatch(addQuestion(question)))
      .then(({ question }) =>
        dispatch(addQuestionToUser(question.id, authedUser))
      )
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAddQuestionVote(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestionAnswer(authedUser, qid, answer)
      .then(() => dispatch(addQuestionVote(authedUser, qid, answer)))
      .then(({ qid, answer, authedUser }) =>
        dispatch(addQuestionVoteToUser(qid, answer, authedUser))
      )
      .then(() => dispatch(hideLoading()));
  };
}
