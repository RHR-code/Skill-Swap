import React from "react";

const About = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-accent text-center py-10">
        About Us
      </h1>
      <div className="min-h-screen bg-gray-50 text-gray-800 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" className="w-full">
            <img
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team working"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

          <div data-aos="fade-left" className="space-y-6">
            <p className=" leading-relaxed text-gray-600">
              Welcome to our platform! We designed this app with one goal in
              mind: to make your daily tasks easier, smoother, and more
              enjoyable. With a clean UI, fast performance, and intuitive
              navigation, we built this experience around what users actually
              need.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Our team focuses on modern design, strong functionality, and a
              user-first experience. Whether you're browsing, managing tasks, or
              exploring features — everything feels simple, fast, and familiar.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              We believe apps should feel like home. That's why every detail —
              the layout, the colors, the flow — is crafted to give you a
              smooth, library-like feel.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="max-w-5xl mx-auto mt-24 text-center space-y-6"
        >
          <h1 className="text-3xl font-bold text-accent text-center ">
            Our Mission
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            To create a platform that blends style with simplicity — giving
            users a place where everything works effortlessly.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
