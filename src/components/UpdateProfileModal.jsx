import React, { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const UpdateProfileModal = () => {
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const { updateUser, setUser, user } = use(AuthContext);
  const handleUpdateProfile = () => {
    if (displayName && photoURL) {
      updateUser({ displayName, photoURL }).then(() => {
        setUser({ ...user, displayName, photoURL });
        toast.success("Profile Name and Photo Updated");
        setPhotoURL("");
      });
    } else if (displayName || photoURL) {
      if (displayName) {
        updateUser({ displayName }).then(() => {
          setUser({ ...user, displayName });
          toast.success("Profile Name Updated");
          setDisplayName("");
        });
      } else if (photoURL) {
        updateUser({ photoURL }).then(() => {
          setUser({ ...user, photoURL });
          toast.success("Profile Photo Updated");
          setPhotoURL("");
        });
      }
    } else {
      toast.error("Please Enter Data To Update");
    }
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h1 className="text-center text-2xl font-bold">
            Update Your Profile
          </h1>
          <label className="label text-base-100 text-xl font-semibold">
            Name
          </label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="input w-full"
            placeholder="Enter Your Name"
            required
          />
          <label className="label text-base-100 text-xl font-semibold">
            Photo-URL
          </label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input w-full"
            placeholder="Enter Your PhotoURL"
            required
          />
          <div className="flex mt-5 items-center justify-between">
            <form method="dialog">
              <button
                onClick={handleUpdateProfile}
                className=" btn btn-primary"
              >
                Update
              </button>
            </form>
            <div className="">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-outline ">Close</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateProfileModal;
