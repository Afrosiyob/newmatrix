import Axios from "axios";
import { openNotificationWithIcon } from "../actions";

export const SET_USER = "SET_USER";
export const LOG_OUT = "LOG_OUT";
export const EDIT_USER = "EDIT_USER";

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const logUserOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const editUser = (payload) => {
  return {
    type: EDIT_USER,
    payload,
  };
};

export const editUserThunk = (newuserdata) => (dispatch, getState) => {
  const url = `${process.env.REACT_APP_SERVER_URL}/api/update/`;

  Axios.put(url, newuserdata, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      console.log("yangi rasm");
      console.log(res);

      dispatch(editUser(res.data));
      openNotificationWithIcon(
        "success",
        "Xabarnoma",
        "Kiritilgan ma'lumotlar muffaqiyatli junatildi"
      );
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
      openNotificationWithIcon(
        "error",
        "Xabarnoma",
        "Kiritilgan ma'lumotlar muffaqiyatli junatilmadi"
      );
    });
};

export const fetchUser = (userInfo, history) => (dispatch) => {
  const url = `${process.env.REACT_APP_SERVER_URL}/api/login/`;
  Axios.post(url, userInfo)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_id", res.data.user.id);
      dispatch(setUser(res.data));
      openNotificationWithIcon(
        "success",
        "Xabarnoma",
        "Kiritilgan ma'lumotlar muffaqiyatli junatildi"
      );
      history.push("/admin");
    })
    .catch((err) => {
      openNotificationWithIcon(
        "error",
        "Xabarnoma",
        "Kiritilgan ma'lumotlarni junatishlikda xatolik yuz berdi"
      );
    });
};

export const logUserOutReal = () => (dispatch) => {
  const url = `${process.env.REACT_APP_SERVER_URL}/api/logout/`;
  Axios.post(url, {
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
      openNotificationWithIcon(
        "info",
        "Xabarnoma",
        "Duvay gaplashamiza uzini asra... XD"
      );
      dispatch(logUserOut());
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    });
};

export const signUserUp = (userInfo) => (dispatch) => {
  const url = `${process.env.REACT_APP_SERVER_URL}/api/register/`;

  Axios.post(url, userInfo)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_id", res.data.user.id);
      dispatch(setUser(res.data));
      openNotificationWithIcon(
        "success",
        "Xabarnoma",
        "Kiritilgan ma'lumotlar muffaqiyatli junatildi"
      );
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
      openNotificationWithIcon(
        "error",
        "Xabarnoma",
        "Kiritilgan ma'lumotlarni junatishlikda xatolik yuz berdi"
      );
    });
};

export const autoLogin = () => (dispatch) => {
  const url = `${process.env.REACT_APP_SERVER_URL}/api/login/`;

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
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_id", res.data.user.id);
      dispatch(setUser(res.data));
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
      openNotificationWithIcon("error", "Xabarnoma", "User kirishda muammo");
    });
};
