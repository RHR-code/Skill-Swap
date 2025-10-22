import React from "react";
import { useLoaderData, useParams } from "react-router";
import BookSession from "../components/BookSession";

const SkillsDetails = () => {
  const allSkillData = useLoaderData();
  const { id } = useParams();
  const skillData = allSkillData.find((skill) => skill.skillId == id);
  const {
    skillName,
    image,
    price,
    rating,
    skillId,
    providerName,
    providerEmail,
    slotsAvailable,
    description,
    category,
  } = skillData;

  return (
    <div className="py-10">
      <div className="flex gap-10 bg-base-300 backdrop-blur-lg p-10 rounded-2xl ">
        <div>
          <img className="rounded-2xl" src={image} alt="" />
        </div>
        <div className="flex flex-col justify-center gap-5">
          <h2 className="font-bold text-4xl text-primary">{skillName}</h2>
          <p className="font-semibold text-base-200">{description}</p>
          <div className="flex justify-between font-bold items-center text-base-200">
            <h1 className="text-2xl">{providerName}</h1>
            <h2>{providerEmail}</h2>
          </div>
          <div className="flex items-center justify-between">
            <p className="bg-primary/20 inline-block px-10 py-2 rounded-full text-primary font-black">
              {category}
            </p>
            <p className="font-bold">
              Slots Available : <span>{slotsAvailable}</span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold">
              Price : <span className="text-primary">{price}$</span>
            </p>
            <p className="font-bold">
              Rating : <span className="text-primary">{rating}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-10">
        <BookSession />
      </div>
    </div>
  );
};

export default SkillsDetails;
