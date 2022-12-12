import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  SAVE_NOTE,
  SET_EDITING_DATE,
} from "../../store/actions/calendarActions";

import styles from "./style.module.css";

export const Dialog = ({ visible }) => {
  const { notes, editingDate } = useSelector((state) => state.calendar);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let text = "";
    if (editingDate) {
      text = notes[editingDate.format("YYYY-MM-DD")] || "";
    }
    setText(text);
  }, [editingDate]);

  if (!visible) {
    return;
  }

  return (
    <div className={styles.dialog__container}>
      <div className={styles.dialog__content}>
        <button
          onClick={() => dispatch(SET_EDITING_DATE(undefined))}
          className={styles.dialog__close}
        >
          close
        </button>
        <div className={styles.dialog__form}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            name="text"
            placeholder="text"
          />
          <button onClick={() => dispatch(SAVE_NOTE(text))}>Save</button>
        </div>
      </div>
    </div>
  );
};
