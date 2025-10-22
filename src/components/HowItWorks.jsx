import React from "react";
import laptopImg from "../assets/laptop.png";
import phoneImg from "../assets/smartphone.png";
import businessImg from "../assets/businessman.png";
import supportImg from "../assets/24-hours-support.png";
const HowItWorks = () => {
  const guideArr = [
    {
      img: laptopImg,
      title: "Sign Up for free in 2 minutes",
      description: "Provides some basic information like your name and email",
    },
    {
      img: phoneImg,
      title: "Get personalized deals",
      description:
        "You can find all sort of courses . You can choose what to learn",
    },
    {
      img: businessImg,
      title: "Look for best teacher",
      description:
        "We have experienced teacher who are well trained you can always look for better one for your learning",
    },
    {
      img: supportImg,
      title: "Speak to our course advisor",
      description:
        "You can talk to our course advisor about your course related questions ",
    },
  ];
  return (
    <div>
      <div className="bg-accent text-white pt-20 pb-60">
        <h1 className="text-3xl font-bold text-center py-5">How It Works</h1>
        <p className="text-center ">Learn from our best to grow your career </p>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-10 w-11/12 mx-auto -mt-40">
          {guideArr.map((guide) => (
            <div className="bg-base-300/30 shadow-2xl backdrop-blur-sm p-10 rounded-2xl flex flex-col items-center gap-5">
              <img className="w-[100px]" src={guide.img} alt="" />
              <h2 className="font-bold text-lg text-center">{guide.title}</h2>
              <p className="text-sm font-semibold text-center">
                {guide.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
