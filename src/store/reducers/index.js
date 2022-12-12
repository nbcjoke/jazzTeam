import { combineReducers } from "redux";

import { loginReducer } from "./loginReducer";
import { calendarReducer } from "./calendarReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  calendar: calendarReducer,
});
