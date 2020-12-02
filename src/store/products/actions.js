import Axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const getProducts = (payload) => {
  return {
    type: GET_PRODUCTS,
    payload,
  };
};

export const getProductsThunk = () => (dispatch) => {
  const url = `${process.env.REACT_APP_SERVER_URL}/api/book/`;
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
      dispatch(getProducts(res.data));
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    });
};

export const removeProduct = (payload) => {
  return {
    type: REMOVE_PRODUCT,
    payload,
  };
};

export const removeProductThunk = (product_id) => (dispatch) => {
  const url = `${process.env.REACT_APP_SERVER_URL}/api/book/${product_id}/`;
  Axios.delete(url, {
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
      dispatch(getProducts(res.data));
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    });
};

export const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};

export const addProductThunk = (product) => (dispatch) => {
  const url = `${process.env.REACT_APP_SERVER_URL}/api/book/`;
  Axios.post(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
    product,
  })
    .then((res) => {
      console.log("====================================");
      console.log(res);
      console.log("====================================");
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    });
};
