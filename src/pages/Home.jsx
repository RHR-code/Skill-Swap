import React from "react";
import HeroSlider from "../components/HeroSlider";
import { useLoaderData } from "react-router";
import PopularSkills from "../components/PopularSkills";

const Home = () => {
  const skillsData = useLoaderData();
  console.log(skillsData);

  return (
    <div>
      <section className="py-5 bg-base-300">
        <HeroSlider skillsData={skillsData} />
      </section>
      <section className="mt-20">
        <PopularSkills skillsData={skillsData} />
      </section>
    </div>
  );
};

export default Home;
