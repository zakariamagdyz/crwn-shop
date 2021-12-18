import userActionTypes from "./user.types";

const INIT_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  error: null,
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));

    case userActionTypes.SET_CURRENT_USER:
    case userActionTypes.SIGN_IN_USER:
      return { ...state, currentUser: action.payload };
    case userActionTypes.SIGN_OUT_USER:
      return { ...state, currentUser: null };

    default:
      return state;
  }
};

export default userReducer;
