import React, { useState } from "react";
import { useLoaderData } from "react-router";
import SkillCard from "../components/SkillCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { PacmanLoader } from "react-spinners";

const AllSkills = () => {
  // const skillsData = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("");
  const axiosSecure = useAxiosSecure();
  const { data: skills = [], isLoading } = useQuery({
    queryKey: ["skills", searchText, sort],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/skills?searchText=${searchText}&sort=${sort}`
      );
      return res.data;
    },
  });
  console.log(sort);

  return (
    <div>
      <h1 className="text-3xl font-bold text-accent text-center py-10">
        All Available Skills {skills.length}
      </h1>
      <div className="flex  items-center justify-between">
        <input
          type="search"
          onChange={(e) => setSearchText(e.target.value)}
          className="input my-5"
          placeholder="Search"
        />
        <select
          onClick={(e) => setSort(e.target.value)}
          defaultValue="Pick a color"
          className="select"
        >
          <option value="sbp">Sort By Price</option>
          <option value="dec">High To Low</option>
          <option value="asc">Low To High</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-2 lg:grid-cols-4 gap-10">
        {isLoading && (
          <div className="flex items-center justify-center w-screen">
            <PacmanLoader color="#4e56c0" size={40} />
          </div>
        )}
        {skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
