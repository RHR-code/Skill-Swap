import axios from "axios";
import React from "react";
const instance = axios.create({
  baseURL: "https://skill-swap-server-eight.vercel.app",
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
