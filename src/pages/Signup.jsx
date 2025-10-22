import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const { signupUser, setUser, updateUser } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    signupUser(email, password)
      .then((res) => {
        updateUser({ displayName, photoURL }).then(() => {
          setUser(res.user);
        });
      })
      .catch((err) => {
        console.log(err.code);
      });
  };
  return (
    <div className="flex justify-center pt-5">
      <div className="card bg-accent w-full max-w-2xl shrink-0 shadow-2xl py-20 px-10">
        <div className="card-body">
          <h1 className="text-white font-bold text-4xl text-center">
            User SignUp
          </h1>
          <form onSubmit={handleSignUp}>
            <fieldset className="fieldset flex flex-col gap-5">
              <label className="label text-base-100 text-xl font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter Your Name"
                required
              />
              <label className="label text-base-100 text-xl font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Enter Your Email"
                required
              />
              <label className="label text-base-100 text-xl font-semibold">
                Photo-URL
              </label>
              <input
                type="text"
                name="photoURL"
                className="input w-full"
                placeholder="Enter Your PhotoURL"
                required
              />
              <label className="label text-base-100  text-xl font-semibold ">
                Password
              </label>
              <input
                type="Password"
                name="password"
                className="input w-full "
                placeholder="Enter Your Password"
                required
              />

              <button className="btn btn-primary mt-4 font-bold text-lg">
                Register
              </button>
              <p className="text-base-100 text-base">
                Already have an account?{" "}
                <Link to="/login" className="text-secondary underline">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
