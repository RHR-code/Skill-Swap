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
import AllSkills from "../pages/AllSkills";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={MainLayout}>
      <Route
        index={true}
        // loader={() => fetch("/skills.json")}
        loader={async () => {
          const [skillsData, provider] = await Promise.all([
            fetch("/skills.json").then((res) => res.json()),
            fetch("/topSeller.json").then((res) => res.json()),
          ]);

          return { skillsData, provider };
        }}
        Component={Home}
      />
      <Route
        path="/allskills"
        loader={() => fetch("/skills.json")}
        Component={AllSkills}
      />
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={Signup} />
      <Route path="/*" element={<div>Error 404 Page</div>} />
    </Route>
  )
);
