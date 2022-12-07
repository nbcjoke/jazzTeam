import React from "react";

import { Navigation } from "../navigation";

import styles from "./style.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Navigation />
    </div>
  );
};
