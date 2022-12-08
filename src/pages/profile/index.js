import React from "react";
import { useSelector } from "react-redux";

import styles from "./style.module.css";

export const Profile = () => {
  const { userData } = useSelector((state) => state.login);

  return (
    <div>
      <h1 className={styles.title}>Profile</h1>
      <div className={styles.profile__info}>
        <p>{userData.username}</p>
        <p>{userData.password}</p>
      </div>
      <div className={styles.profile__calendar}></div>
    </div>
  );
};
