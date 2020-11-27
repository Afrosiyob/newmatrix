import Axios from "axios";

export const SET_PLANS = "SET_PLANS";

export const setPlans = (payload) => {
  return {
    type: SET_PLANS,
    payload,
  };
};

export const fetchPlans = () => (dispatch) => {
  const url = `${process.env.REACT_APP_SERVER_URL}/api/plan/`;

  Axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      console.log("====================================");
      console.log(res);
      console.log("====================================");

      dispatch(setPlans(res.data));
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    });
};
