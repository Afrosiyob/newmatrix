import Axios from "axios";

export const SET_PLANS = "SET_PLANS";

export const setPlans = (payload) => {
  return {
    type: SET_PLANS,
    payload,
  };
};

export const fetchPlans = (plans) => (dispatch) => {
  const url = "url";

  Axios.post(url, plans)
    .then((res) => {
      console.log("====================================");
      console.log(res);
      console.log("====================================");
      dispatch(setPlans(res));
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    });
};
