import userActionTypes from "./user.types";

export const setCurrentUsre = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const signOut = () => ({
  type: userActionTypes.SIGN_OUT_USER,
});

export const signInUser = (user) => ({
  type: userActionTypes.SIGN_IN_USER,
  payload: user,
});
