import React from "react";

const SkillCard = ({ skill }) => {
  const { skillName, image, price, rating } = skill;
  return (
    <div className="bg-base-300 rounded-2xl flex flex-col justify-between ">
      <img
        className="h-[250px] mb-5 w-full object-cover rounded-2xl"
        src={image}
        alt=""
      />
      <div className="px-5 flex flex-col gap-5 pb-5 ">
        <h2 className="text-lg font-bold">{skillName}</h2>
        <div className="flex justify-between font-bold text-base-200">
          <p> Price: ${price}</p>
          <p> Rating: {rating}</p>
        </div>
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  );
};

export default SkillCard;
