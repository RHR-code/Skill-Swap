import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handleLogin = () => {};
  return (
    <div className="flex justify-center pt-5">
      <div className="card bg-accent w-full max-w-2xl shrink-0 shadow-2xl py-20 px-10">
        <div className="card-body">
          <h1 className="text-white font-bold text-4xl text-center">
            User Login
          </h1>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset flex flex-col gap-5">
              <label className="label text-base-100 text-xl font-semibold">
                Email
              </label>
              <input
                type="email"
                className="input w-full"
                placeholder="Enter Your Email"
                required
              />
              <label className="label text-base-100  text-xl font-semibold ">
                Password
              </label>
              <input
                type="Password"
                className="input w-full "
                placeholder="Enter Your Password"
                required
              />
              <div>
                <a className="link link-hover text-white underline text-sm font-semibold">
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-primary mt-4 font-bold text-lg">
                Login
              </button>
              <p className="text-base-100 text-base">
                Already have an account?{" "}
                <Link to="/signup" className="text-secondary underline">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
