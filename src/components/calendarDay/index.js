import React from "react";
import { useDispatch } from "react-redux";

import { SET_EDITING_DATE } from "../../store/actions/calendarActions";

import styles from "./style.module.css";

export const CalendarDay = ({ day, index, note }) => {
  const dispatch = useDispatch();

  let format = "DD";
  if (index === 0) {
    format = "dddd, DD";
  }

  return (
    <div
      className={!note ? styles.day : styles.note__day}
      onClick={() => dispatch(SET_EDITING_DATE(day))}
    >
      {day.format(format)}
      {note ? <div className={styles.note}>{note}</div> : ""}
    </div>
  );
};
