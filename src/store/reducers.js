import { combineReducers } from "redux";
import { paymentReducer } from "./payment/reducers";
import { setPlansReducers } from "./plans/reducers";
import { treeReducer } from "./tree/reducers";
import { userReducer } from "./user/reducers";

const allReducers = {
  userReducer,
  setPlansReducers,
  paymentReducer,
  treeReducer,
};

export const rootReducer = combineReducers(allReducers);
