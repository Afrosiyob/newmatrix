import { SET_PLANS } from "./actions";

const plansState = {
  plans: {},
};

export const setPlansReducers = (state = plansState, { type, payload }) => {
  switch (type) {
    case SET_PLANS:
      return {
        plans: { ...payload },
      };

    default:
      return state;
  }
};
