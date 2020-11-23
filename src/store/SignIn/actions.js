export const SIGN_IN_USERNAME = "SIGN_IN_USERNAME";
export const SIGN_IN_PASSWORD = "SIGN_IN_PASSWORD";

export const setUsername = (username) => ({
  type: SIGN_IN_USERNAME,
  payload: username,
});

export const setPassword = (password) => ({
  type: SIGN_IN_PASSWORD,
  payload: password,
});
