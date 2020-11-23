import {
  SIGN_UP_CONFIRM_PASSWORD,
  SIGN_UP_EMAIL,
  SIGN_UP_PARTNER,
  SIGN_UP_PASSWORD,
  SIGN_UP_PHONE,
  SIGN_UP_USERNAME,
} from "./actions";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassowrd: "",
  phone: "",
  partner: "",
};

export const signUpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP_USERNAME:
      return {
        ...state,
        username: payload,
      };
    case SIGN_UP_EMAIL:
      return {
        ...state,
        email: payload,
      };
    case SIGN_UP_PASSWORD:
      return {
        ...state,
        password: payload,
      };
    case SIGN_UP_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassowrd: payload,
      };
    case SIGN_UP_PHONE:
      return {
        ...state,
        phone: payload,
      };
    case SIGN_UP_PARTNER:
      return {
        ...state,
        partner: payload,
      };
    default:
      return state;
  }
};
