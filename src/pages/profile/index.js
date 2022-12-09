import React from "react";
import { useSelector } from "react-redux";

import styles from "./style.module.css";

export const Profile = () => {
  const { userData } = useSelector((state) => state.login);

  return (
    <div>
      <h1>Profile</h1>
      <div className={styles.profile__info}>
        <p className={styles.profile__username}>{userData.username}</p>
        <p className={styles.profile__password}>{userData.password}</p>
      </div>
      <div className={styles.profile__calendar}></div>
    </div>
  );
};
