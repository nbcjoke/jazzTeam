import React from "react";

import { infoList } from "./mock";
import styles from "./style.module.css";

export const Info = () => {
  return (
    <div className={styles.container}>
      <h1>Info</h1>
      <div className={styles.container__info}>
        {infoList.map((info, index) => {
          return (
            <div key={index} className={styles.info}>
              <p className={styles.info__title}>{info.title}</p>
              <div className={styles.info__description}>{info.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
