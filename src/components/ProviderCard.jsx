import React from "react";

const ProviderCard = ({ data }) => {
  const { providerName, specialty, avgRating, coursesOffered, profileImage } =
    data;
  return (
    <div className="h-[400px] relative rounded-2xl ">
      <img
        className="h-full w-full object-cover rounded-2xl"
        src={profileImage}
        alt=""
      />
      <div className="bg-base-200/30 backdrop-blur-sm rounded-2xl   text-white px-10 py-5 absolute bottom-0 right-0 left-0 flex flex-col gap-2">
        <h2 className="font-bold text-2xl">{providerName}</h2>
        <h2 className="text-base-300 text-sm">{specialty}</h2>
        <div className="flex justify-between ">
          <p>Rating: {avgRating}</p>
          <p>Courses: {coursesOffered}</p>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
