import Axios from "axios";

export const SET_PAYMENT = "SET_PAYMENT";

export const setPayment = (payload) => {
  return {
    type: SET_PAYMENT,
    payload,
  };
};

export const sendPayment = (paymentInfo) => (dispatch) => {
  // console.log(paymentInfo);

  // dispatch(setPayment(paymentInfo));

  const url = `${process.env.REACT_APP_SERVER_URL}/api/buy/`;

  Axios.post(url, paymentInfo, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      //   localStorage.setItem("token", res.token);

      dispatch(setPayment(res.data));

      alert("malumotlar mofaqqiyatli junatildi");
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    });
};
