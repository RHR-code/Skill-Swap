import React from "react";
import HeroSlider from "../components/HeroSlider";
import { useLoaderData } from "react-router";
import PopularSkills from "../components/PopularSkills";
import TopProvider from "../components/TopProvider";

const Home = () => {
  const { skillsData, provider } = useLoaderData();
  console.log(skillsData);

  return (
    <div>
      <section className="py-5 bg-base-300">
        <HeroSlider skillsData={skillsData} />
      </section>
      <section className="mt-20">
        <PopularSkills skillsData={skillsData} />
      </section>
      <section>
        <TopProvider provider={provider} />
      </section>
    </div>
  );
};

export default Home;
