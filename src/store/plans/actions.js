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
      dispatch(setPlans(res.data));
      console.log("====================================");
      console.log(res.data);
      console.log("====================================");
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    });
};
