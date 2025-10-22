import React from "react";
import SkillCard from "./SkillCard";

const PopularSkills = ({ skillsData }) => {
  const popularSkills = skillsData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
  console.log("popularSkills", popularSkills);

  return (
    <div>
      <h1 className="text-3xl font-bold text-accent text-center py-10">
        Our Popular Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {popularSkills.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default PopularSkills;
