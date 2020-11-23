export const SIGN_UP_USERNAME = "SIGN_UP_USERNAME";
export const SIGN_UP_EMAIL = "SIGN_UP_EMAIL";
export const SIGN_UP_PASSWORD = "SIGN_UP_PASSWORD";
export const SIGN_UP_CONFIRM_PASSWORD = "SIGN_UP_CONFIRM_PASSWORD";
export const SIGN_UP_PHONE = "SIGN_UP_PHONE";
export const SIGN_UP_PARTNER = "SIGN_UP_PARTNER";

export const setUsername = (username) => ({
  type: SIGN_UP_USERNAME,
  payload: username,
});
export const setEmail = (email) => ({
  type: SIGN_UP_EMAIL,
  payload: email,
});
export const setPassword = (password) => ({
  type: SIGN_UP_PASSWORD,
  payload: password,
});
export const setConfirmPassword = (confirmPassword) => ({
  type: SIGN_UP_CONFIRM_PASSWORD,
  payload: confirmPassword,
});
export const setPhone = (phone) => ({
  type: SIGN_UP_PHONE,
  payload: phone,
});
export const setPartner = (partner) => ({
  type: SIGN_UP_PARTNER,
  payload: partner,
});
