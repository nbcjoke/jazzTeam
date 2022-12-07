import { handleActions } from "redux-actions";

import * as actions from "../actions/loginActions";

const initialState = {
  userData: {},
  isLoading: false,
  isAuth: false,
  errors: null,
};

export const loginReducer = handleActions(
  {
    [actions.GET_LOGIN_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_LOGIN_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      isAuth: true,
      userData: payload.response,
    }),
    [actions.GET_LOGIN_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  initialState
);
