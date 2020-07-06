import { SET_AUTHED_USER, AUTH_LOGOUT } from "../actions/authedUser";

const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    case AUTH_LOGOUT:
      return null;
    default:
      return state;
  }
};

export default authedUser;
