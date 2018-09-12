import { ADD, DELETE } from "../constants/index.js";

export const messageReducer = (state=[], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    case DELETE:
      const temp = [...state];
      temp.splice(0, 1);
      return temp;
    default:
      return state;
  }
};
