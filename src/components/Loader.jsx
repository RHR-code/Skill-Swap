import React from "react";
import { PacmanLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <PacmanLoader color="#4e56c0" size={40} />
    </div>
  );
};

export default Loader;
