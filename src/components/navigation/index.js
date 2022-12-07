import react from "react";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__left}>
        <Link to="/">Home</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/info">Info</Link>
      </div>
      <div className={styles.navigation__right}>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};
