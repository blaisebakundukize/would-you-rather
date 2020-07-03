import { getUsers } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const addQuestionToUser = (questionId, authedUser) => ({
  type: ADD_QUESTION_TO_USER,
  questionId,
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
