import { getUsers } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const ADD_QUESTION_VOTE_TO_USER = "ADD_QUESTION_VOTE_TO_USER";

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const addQuestionToUser = (qid, authedUser) => ({
  type: ADD_QUESTION_TO_USER,
  qid,
  authedUser,
});

export const addQuestionVoteToUser = (qid, answer, authedUser) => ({
  type: ADD_QUESTION_VOTE_TO_USER,
  qid,
  answer,
  authedUser,
});

export function handleReceiveUsers() {
  return (dispatch) => {
    dispatch(showLoading());
    return getUsers()
      .then((users) => dispatch(receiveUsers(users)))
      .then(() => dispatch(hideLoading()));
  };
}
