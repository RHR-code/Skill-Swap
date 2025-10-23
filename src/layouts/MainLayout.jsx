import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";
const MainLayout = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 200,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto px-5">
      <Navbar />
      <div className="min-h-[400px]">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default MainLayout;
