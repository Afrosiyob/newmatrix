import { SIGN_IN_PASSWORD, SIGN_IN_USERNAME } from "./actions";

const initialState = {
  username: "",
  password: "",
};

export const signInReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_USERNAME:
      return {
        ...state,
        username: payload,
      };
    case SIGN_IN_PASSWORD:
      return {
        ...state,
        password: payload,
      };
    default:
      return state;
  }
};
