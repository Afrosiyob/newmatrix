import Axios from "axios";
import { notification } from "antd";

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
  });
};

export const SET_PAYMENT = "SET_PAYMENT";

export const setPayment = (payload) => {
  return {
    type: SET_PAYMENT,
    payload,
  };
};

export const sendPayment = (paymentInfo) => (dispatch) => {
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
      openNotificationWithIcon("success");

      // BrowserRouter.push(res.data.process_buy_url);
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    });
};
