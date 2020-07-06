export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const setAuthedUser = (id) => ({
  type: SET_AUTHED_USER,
  id,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export function logout() {
  return (dispatch) => {
    dispatch(authLogout());
  };
}

export function login(id) {
  return (dispatch) => {
    dispatch(setAuthedUser(id));
  };
}
