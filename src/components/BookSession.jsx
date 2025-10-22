import React from "react";
import toast from "react-hot-toast";

const BookSession = () => {
  const handleBook = (e) => {
    e.preventDefault();
    toast.success("Session Booked Successfully");
    e.target.reset();
  };
  return (
    <div className="card bg-accent/50 backdrop-blur-sm  w-full max-w-2xl shrink-0 shadow-2xl p-10 ">
      <div className="card-body">
        <form onSubmit={handleBook}>
          <fieldset className="fieldset">
            <label className="label text-base-100">Name</label>
            <input
              type="text"
              className="input w-full "
              placeholder="Enter Your Name"
              required
            />
            <label className="label text-base-100">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Enter Your Email"
              required
            />

            <button className="btn btn-primary mt-4">Book Session</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default BookSession;
