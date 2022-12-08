import React from "react";

import styles from "./style.module.css";

export const LoginForm = ({ formValues, handleChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        autoComplete="off"
        placeholder="username"
        type="text"
        name="username"
        value={formValues.username}
        onChange={handleChange}
      />
      <input
        autoComplete="off"
        placeholder="password"
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};
