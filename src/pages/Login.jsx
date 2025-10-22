import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { loginUser, setUser, googleLogin } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const { state } = useLocation();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleGoogleSingIn = () => {
    console.log("button clicked");

    googleLogin()
      .then((res) => {
        setUser(res.user);
        console.log(res);
        navigate(state ? state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(state ? state : "/");
        e.target.reset();
        toast.success("Successfully LogedIn");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

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
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full"
                placeholder="Enter Your Email"
                required
              />
              <label className="label text-base-100  text-xl font-semibold ">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  className="input w-full "
                  placeholder="Enter Your Password"
                  required
                />
                <div
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-2.5 z-10"
                >
                  {showPass ? <FaRegEyeSlash size={20} /> : <FaEye size={20} />}
                </div>
              </div>
              <div>
                <Link
                  to="/resetpassword"
                  state={email}
                  className="link link-hover text-white underline text-sm font-semibold"
                >
                  Forgot password?
                </Link>
              </div>
              <button className="btn btn-primary mt-4 font-bold text-lg">
                Login
              </button>
              <button
                type="button"
                className="btn bg-white text-black border-[#e5e5e5]"
                onClick={handleGoogleSingIn}
              >
                <FcGoogle size={20} /> Login with Google
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
