import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const { pathname } = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (user) return children;
  return <Navigate state={pathname} to="/login" />;
};

export default PrivateRoute;
