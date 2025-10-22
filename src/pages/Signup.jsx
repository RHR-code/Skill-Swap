import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const { signupUser, setUser, updateUser, googleLogin } = use(AuthContext);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z]).{6,}$/;

  const handleGoogleSingIn = () => {
    console.log("button clicked");

    googleLogin()
      .then((res) => {
        setUser(res.user);
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    if (!passRegex.test(password)) {
      setError(
        "Password must be at least 6 character and should include a uppercase and lowercase letter"
      );
    } else {
      signupUser(email, password)
        .then((res) => {
          updateUser({ displayName, photoURL }).then(() => {
            setUser(res.user);
            toast.success("Successfully SignedUp");
            setError("");
            navigate("/");
            e.target.reset();
          });
        })
        .catch((err) => {
          toast.error(err.code);
        });
    }
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
              <button className="btn btn-primary mt-4 font-bold text-lg">
                Register
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
                <Link to="/login" className="text-secondary underline">
                  Login
                </Link>
              </p>
              {error && <p className="text-red-500">{error}</p>}
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
