import { combineReducers } from "redux";
import { setPlansReducers } from "./plans/reducers";
import { userReducer } from "./user/reducers";

const allReducers = {
  userReducer,
  setPlansReducers,
};

export const rootReducer = combineReducers(allReducers);
