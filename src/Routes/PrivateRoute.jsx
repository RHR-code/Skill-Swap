import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  const { pathname } = useLocation();
  console.log(location);

  if (user) return children;
  return <Navigate state={pathname} to="/login" />;
};

export default PrivateRoute;
