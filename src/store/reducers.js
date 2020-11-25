import { combineReducers } from "redux";
import { userReducer } from "./user/reducers";

const allReducers = {
  userReducer,
};

export const rootReducer = combineReducers(allReducers);
