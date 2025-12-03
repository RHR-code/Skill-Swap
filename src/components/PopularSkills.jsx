import React from "react";
import SkillCard from "./SkillCard";
import { NavLink } from "react-router";
import { TfiViewList } from "react-icons/tfi";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PopularSkills = () => {
  const axiosSecure = useAxiosSecure();
  const { data: popularSkills = [] } = useQuery({
    queryKey: ["popular-skills"],
    queryFn: async () => {
      const res = await axiosSecure.get("/popular-skills");
      return res.data;
    },
  });

  return (
    <div data-aos="fade-up">
      <h1 className="text-3xl font-bold text-accent text-center py-10">
        Our Popular Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {popularSkills.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill} />
        ))}
      </div>
      <div className=" flex justify-center my-10 hover:scale-105 duration-100 ease-in-out">
        <NavLink
          to="/allskills"
          className="btn btn-primary px-20 py-6 font-bold text-lg"
        >
          <TfiViewList /> View All
        </NavLink>
      </div>
    </div>
  );
};

export default PopularSkills;
