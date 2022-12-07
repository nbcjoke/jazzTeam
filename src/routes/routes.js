import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";

import { ROUTE_NAMES } from "./routeNames";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<Home />} />
      {/* <Route path={ROUTE_NAMES.LOGIN} element={<CryptoDetails />} />
      <Route path={ROUTE_NAMES.PROFILE} element={<CryptoDetails />} />
      <Route path={ROUTE_NAMES.INFO} element={<CryptoDetails />} />
      <Route path={ROUTE_NAMES.CALENDAR} element={<CryptoDetails />} /> */}
    </Routes>
  );
};
