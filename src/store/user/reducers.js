import { LOG_OUT, SET_USER } from "./actions";

const userState = {
  loggedIn: false,
  user: {},
};

export const userReducer = (state = userState, { type, payload }) => {
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
