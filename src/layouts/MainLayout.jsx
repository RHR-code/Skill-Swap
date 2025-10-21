import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-5">
      <Navbar />
      <div className="min-h-[400px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
