export const SET_USER = "SET_USER";
export const LOG_OUT = "LOG_OUT";

export const setUser = (userdata) => ({
  type: SET_USER,
  payload: userdata,
});

export const logUserOut = () => ({ type: LOG_OUT });

export const fetchUser = (userInfo) => (dispatch) => {
  fetch(`http://localhost:4000/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      // data sent back will in the format of
      // {
      //     user: {},
      //.    token: "aaaaa.bbbbb.bbbbb"
      // }
      localStorage.setItem("token", data.token);
      dispatch(setUser(data.user));
    });
};

export const signUserUp = (userInfo) => (dispatch) => {
  fetch(`http://eb35d6d34069.ngrok.io/api/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      // data sent back will in the format of
      // {
      //     user: {},
      //.    token: "aaaaa.bbbbb.bbbbb"
      // }
      localStorage.setItem("token", data.token);
      dispatch(setUser(data.user));
    });
};

export const autoLogin = () => (dispatch) => {
  fetch(`http://localhost:4000/auto_login`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // data sent back will in the format of
      // {
      //     user: {},
      //.    token: "aaaaa.bbbbb.bbbbb"
      // }
      localStorage.setItem("token", data.token);
      dispatch(setUser(data.user));
    });
};
