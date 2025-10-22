import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import UpdateProfileModal from "../components/UpdateProfileModal";

const MyProfile = () => {
  const { user } = use(AuthContext);
  if (!user) return;
  const { displayName, email, photoURL } = user;

  return (
    <div className="flex justify-center mt-10 py-10 bg-base-300">
      <div className="bg-accent py-20 px-30 text-base-100 flex rounded-2xl flex-col items-center gap-5">
        <img
          className="h-[200px] w-[200px] object-cover rounded-full"
          src={photoURL}
          alt=""
        />
        <h1 className="font-bold text-3xl">{displayName}</h1>
        <p className="font-semibold text-base text-base-300">{email}</p>
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="btn btn-primary font-bold text-base "
        >
          Update Profile
        </button>
      </div>
      <UpdateProfileModal />
    </div>
  );
};

export default MyProfile;
