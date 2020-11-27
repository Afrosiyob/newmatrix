import Axios from "axios";

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
      console.log(res);
      dispatch(setUser(res.data));
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    });
};

export const fetchUser = (userInfo) => (dispatch) => {
  const url = `${process.env.REACT_APP_SERVER_URL}/api/login/`;
  Axios.post(url, userInfo)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_id", res.data.user.id);
      dispatch(setUser(res.data));
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
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

      dispatch(logUserOut());
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    });
};

export const signUserUp = (userInfo) => (dispath) => {
  const url = `${process.env.REACT_APP_SERVER_URL}/api/register/`;

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
    });
};
