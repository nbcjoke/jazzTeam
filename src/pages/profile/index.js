import React from "react";
import { useSelector } from "react-redux";

import styles from "./style.module.css";

export const Profile = () => {
  const { userData } = useSelector((state) => state.login);
  const { notes } = useSelector((state) => state.calendar);

  return (
    <div>
      <h1>Profile</h1>
      <div className={styles.profile__info}>
        <p className={styles.profile__username}>Login: {userData.username}</p>
      </div>
      <div className={styles.profile__notes}>
        {Object.entries(notes).map(([key, value]) => {
          return (
            <div key={key}>
              {key}: {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
