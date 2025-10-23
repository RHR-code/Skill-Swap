import React from "react";

const OurAbility = () => {
  return (
    <div className="bg-base-300">
      <h1 className="text-3xl font-bold text-accent text-center pt-20">
        Our Abilities
      </h1>
      <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-15">
        <div className=" border-b pb-5">
          <h1 className="font-black text-5xl">500+</h1>
          <p className="font-semibold text-base pt-5">
            Hour of hands on learning in our courses
          </p>
        </div>
        <div className=" border-b pb-10">
          <h1 className="font-black text-5xl">1500+</h1>
          <p className="font-semibold text-base pt-5">
            Students Passed Our Competitions and Got a Job
          </p>
        </div>
        <div className=" border-b pb-5">
          <h1 className="font-black text-5xl">25/75</h1>
          <p className="font-semibold text-base pt-5">
            The Ration of theory and Practice in Each Courses
          </p>
        </div>
        <div className=" border-b pb-5">
          <h1 className="font-black text-5xl">40+</h1>
          <p className="font-semibold text-base pt-5">
            We Teach people from 4 continents and over 40 countries
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurAbility;
