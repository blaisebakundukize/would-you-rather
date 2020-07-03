import { _saveQuestion } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    question["author"] = authedUser;
    dispatch(showLoading());
    return _saveQuestion(question)
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}
