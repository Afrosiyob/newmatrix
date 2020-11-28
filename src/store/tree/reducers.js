import { SET_TREE } from "./actions";

const treeState = {
  treeData: {},
};

export const treeReducer = (state = treeState, { type, payload }) => {
  switch (type) {
    case SET_TREE:
      return {
        treeData: { ...payload },
      };
    default:
      return state;
  }
};
