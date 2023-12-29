import React from "react";
import useAuth from "../hook/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
