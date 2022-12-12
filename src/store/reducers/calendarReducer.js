import moment from "moment";
import { handleActions } from "redux-actions";

import * as actions from "../actions/calendarActions";

const initialState = {
  todayDate: moment(),
  selectedDate: moment(),
  editingDate: undefined,
  notes: {},
};

export const calendarReducer = handleActions(
  {
    [actions.CHANGE_SELECTED_DATE]: (state, { payload }) => {
      let selectedDate = moment(state.selectedDate);
      const todayDate = moment(state.todayDate);
      if (payload === "next") {
        selectedDate.add(1, "month");
      } else if (payload === "prev") {
        selectedDate.subtract(1, "month");
      } else {
        selectedDate = todayDate;
      }
      return { ...state, selectedDate, todayDate };
    },
    [actions.SET_EDITING_DATE]: (state, { payload }) => {
      return { ...state, editingDate: payload };
    },
    [actions.SAVE_NOTE]: (state, { payload }) => {
      return {
        ...state,
        editingDate: undefined,
        notes: {
          ...state.notes,
          [state.editingDate.format("YYYY-MM-DD")]: payload,
        },
      };
    },
  },
  initialState
);
