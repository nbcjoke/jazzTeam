import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Profile } from "../pages/profile";
import { Info } from "../pages/info";
import { Calendar } from "../pages/calendar";
import { ROUTE_NAMES } from "./routeNames";
import { PrivateRoute } from "./privateRoute";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<Home />} />
      <Route path={ROUTE_NAMES.LOGIN} element={<Login />} />
      <Route
        path={ROUTE_NAMES.PROFILE}
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_NAMES.INFO}
        element={
          <PrivateRoute>
            <Info />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_NAMES.CALENDAR}
        element={
          <PrivateRoute>
            <Calendar />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
