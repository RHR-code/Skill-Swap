import React from "react";
import { useLoaderData } from "react-router";
import SkillCard from "../components/SkillCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllSkills = () => {
  // const skillsData = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const { data: skills = [] } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const res = await axiosSecure.get("/skills");
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-3xl font-bold text-accent text-center py-10">
        All Available Skills {skills.length}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
