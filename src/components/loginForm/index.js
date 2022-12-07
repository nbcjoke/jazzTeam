import React from "react";

export const LoginForm = ({ formValues, handleChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="username"
        name="username"
        value={formValues.username}
        onChange={handleChange}
      />
      <input
        placeholder="password"
        type="password"
        value={formValues.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};
