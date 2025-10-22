import React from "react";
import { useLocation } from "react-router";

const ResetPassword = () => {
  const { state } = useLocation();
  console.log(state);

  const handleResetPass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
  };
  return (
    <div className="flex justify-center pt-5">
      <div className="card bg-accent w-full max-w-2xl shrink-0 shadow-2xl py-20 px-10">
        <div className="card-body">
          <h1 className="text-white font-bold text-4xl text-center">
            Reset Password
          </h1>
          <form onSubmit={handleResetPass}>
            <fieldset className="fieldset flex flex-col gap-5">
              <label className="label text-base-100 text-xl font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                defaultValue={state}
                className="input w-full"
                placeholder="Enter Your Email"
                required
              />

              <button className="btn btn-primary mt-4 font-bold text-lg">
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
