import React from "react";

import styles from "./style.module.css";

export const Calendar = () => {
  return (
    <div>
      <h1>Calendar</h1>
      <div className={styles.container__calendar}>
        <div>
          <div>
            <button className={styles.container__button}>Add event</button>
            <button className={styles.container__button}>Change event</button>
          </div>
          <div>
            <input placeholder="search..."></input>
          </div>
        </div>
        <div className={styles.calendar}></div>
      </div>
    </div>
  );
};
