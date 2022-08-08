import * as actionTypes from "../types/userTypes";

const initialState = {
  //   id: 0,
  //   name: "",
  //   email: "",
  //   company: {},
  user: [],
};

const userReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
        // id: action.user.id,
        // name: action.user.name,
        // email: action.user.email,
        // company: action.user.company,
      };

    default:
      return state;
  }
};

export default userReducer;
