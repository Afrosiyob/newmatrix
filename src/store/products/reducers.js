import { ADD_PRODUCT, GET_PRODUCTS, REMOVE_PRODUCT } from "./actions";

export const productState = {
  products: [],
};

export const productReducer = (state = productState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        payload,
      };

    default:
      return state;
  }
};
