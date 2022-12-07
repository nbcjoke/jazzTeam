import React from "react";

import { useForm } from "../../hooks/useForm";
import { LoginForm } from "../../components/loginForm";

export const Login = () => {
  const { formValues, handleChange } = useForm({
    username: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm
        formValues={formValues}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};
