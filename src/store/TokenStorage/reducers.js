import { LOG_OUT, SET_USER } from "./actions";

const initialState = {
  loggedIn: false,
  user: {},
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        loggedIn: true,
        user: { ...payload },
      };

    case LOG_OUT:
      localStorage.clear();
      return {
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};
