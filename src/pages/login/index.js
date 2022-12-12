import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { LoginForm } from "../../components/loginForm";
import { ROUTE_NAMES } from "../../routes/routeNames";
import { LOGIN_SUCCESS } from "../../store/actions/loginActions";

import styles from "./style.module.css";

export const Login = () => {
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTE_NAMES.PROFILE);
    }
  }, [isAuth]);

  const { formValues, handleChange } = useForm({
    username: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (formValues.username === "Admin" && formValues.password === "12345678") {
      dispatch(LOGIN_SUCCESS(formValues));
    } else {
      alert("Log in failed");
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Login</h1>
      <LoginForm
        formValues={formValues}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};
