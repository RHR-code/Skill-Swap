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
import SkillsDetails from "../pages/SkillsDetails";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile";
import Loader from "../components/loader";
import ResetPassword from "../pages/ResetPassword";
import PageNotFound from "../pages/PageNotFound";
import About from "../components/About";
import Contact from "../components/Contact";
import WhyUs from "../components/WhyUs";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={MainLayout}>
      <Route
        index={true}
        hydrateFallbackElement={<Loader />}
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
        hydrateFallbackElement={<Loader />}
        loader={() => fetch("/skills.json")}
        Component={AllSkills}
      />
      <Route path="/about" Component={About} />
      <Route path="/contact" Component={Contact} />
      <Route path="/why-us" Component={WhyUs} />
      <Route
        path="/skills/:id"
        hydrateFallbackElement={<Loader />}
        // loader={() => fetch("/skills.json")}
        element={<SkillsDetails />}
      />
      <Route
        path="/myprofile"
        element={
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        }
      />
      <Route path="/login" Component={Login} />
      <Route path="/resetpassword" Component={ResetPassword} />
      <Route path="/signup" Component={Signup} />
      <Route path="/*" element={<PageNotFound />} />
    </Route>
  )
);
