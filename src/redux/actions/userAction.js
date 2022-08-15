import * as actionTypes from "../types/userTypes";

export const getUser = () => {
  const action = {
    type: actionTypes.GET_USER,
  };
  return action;
};

export const setUser = (user) => {
  const action = {
    type: actionTypes.SET_USER,
    user: user,
  };
  return action;
};
