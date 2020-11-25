import Axios from "axios";

export const SET_USER = "SET_USER";
export const LOG_OUT = "LOG_OUT";

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

export const fetchUser = (userInfo) => (dispatch) => {
  const url = "http://eb35d6d34069.ngrok.io/api/login/";
  Axios.post(url, userInfo)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.user));
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    });
};

export const signUserUp = (userInfo) => (dispath) => {
  const url = `http://eb35d6d34069.ngrok.io/api/register/`;

  Axios.post(url, userInfo)
    .then((res) => {
      console.log("====================================");
      console.log(res);
      console.log("====================================");
      //   localStorage.setItem("token", res.token);
      //   console.log("====================================");
      //   console.log(res.user);
      //   console.log("====================================");
      //   dispatch(setUser(ress.user));
      alert("malumotlar mofaqqiyatli junatildi");
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err.response.data);
      console.log("====================================");
    });
};

export const autoLogin = () => (dispatch) => {
  const url = "http://eb35d6d34069.ngrok.io/api/login/";

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
      dispatch(setUser(res.data.user));
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    });
};
