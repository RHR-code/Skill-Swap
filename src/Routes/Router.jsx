import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={MainLayout}>
      <Route index={true} Component={Home} />
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={Signup} />
      <Route path="/*" element={<div>Error 404 Page</div>} />
    </Route>
  )
);
