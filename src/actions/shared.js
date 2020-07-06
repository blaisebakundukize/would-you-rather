import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";

// Initialize data after login
export default function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
