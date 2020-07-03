import { RECEIVE_USERS, ADD_QUESTION_TO_USER } from "../actions/users";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION_TO_USER:
      const { questionId, authedUser } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat([questionId]),
        },
      };
    default:
      return state;
  }
};

export default users;
