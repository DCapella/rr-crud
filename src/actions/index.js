import { ADD, DELETE } from "../constants/index.js";


export const addMessage = msg => {
  return {
    type: ADD,
    message: msg,
  };
};

export const delMessage = () => {
  return {
    type: DELETE,
  };
};
