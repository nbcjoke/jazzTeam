import { handleActions } from "redux-actions";

import * as actions from "../actions/loginActions";

const storedData = localStorage.getItem("user-data");

const initialState = {
  userData: storedData ? JSON.parse(storedData) : {},
  isLoading: false,
  isAuth: false,
};

export const loginReducer = handleActions(
  {
    [actions.LOGIN_SUCCESS]: (state, { payload: userData }) => {
      localStorage.setItem("user-data", JSON.stringify(userData));

      return {
        ...state,
        isAuth: true,
        userData,
      };
    },
  },
  initialState
);
