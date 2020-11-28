import Axios from "axios";

export const SET_TREE = "SET_TREE";

export const setTree = (payload) => {
  return {
    type: SET_TREE,
    payload,
  };
};

export const fetchTree = () => (dispatch) => {
  const url = `${
    process.env.REACT_APP_SERVER_URL
  }/api/get-tree/${localStorage.getItem("user_id")}/`;

  Axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      dispatch(setTree(res.data));
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
