import Axios from "axios";

export const SET_PAYMENT = "SET_PAYMENT";

export const setPayment = (payload) => {
  return {
    type: SET_PAYMENT,
    payload,
  };
};

export const sendPayment = (paymentInfo) => (dispatch) => {
  console.log(paymentInfo);

  // const url = `${process.env.REACT_APP_SERVER_URL}/api/buy/`;

  // Axios.post(url, paymentInfo)
  //   .then((res) => {
  //     console.log("====================================");
  //     console.log(res);
  //     console.log("====================================");

  //     //   localStorage.setItem("token", res.token);
  //     console.log("====================================");
  //     console.log(res);
  //     console.log("====================================");
  //     //   dispatch(setPayment(ress.));

  //     alert("malumotlar mofaqqiyatli junatildi");
  //   })
  //   .catch((err) => {
  //     console.log("====================================");
  //     console.log(err);
  //     console.log("====================================");
  //   });
};
