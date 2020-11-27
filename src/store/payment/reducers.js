import { SET_PAYMENT } from "./actions";

const paymentState = {
  data: {},
};

export const paymentReducer = (state = paymentState, { type, payload }) => {
  switch (type) {
    case SET_PAYMENT:
      return {
        data: { ...payload },
      };

    default:
      return state;
  }
};
