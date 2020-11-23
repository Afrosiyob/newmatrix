import { combineReducers } from "redux";
import { signInReducer } from "./SignIn/reducers";
import { signUpReducer } from "./SignUp/reducers";
import { userReducer } from "./TokenStorage/reducers";

const allREducers = {
  signIn: signInReducer,
  signUp: signUpReducer,
  user: userReducer,
};

export const rootReducer = combineReducers(allREducers);
