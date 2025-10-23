import React from "react";
import { useLoaderData } from "react-router";
import SkillCard from "../components/SkillCard";

const AllSkills = () => {
  const skillsData = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-bold text-accent text-center py-10">
        All Available Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillsData.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
