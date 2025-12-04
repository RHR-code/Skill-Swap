import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaAward, FaBookOpen, FaStar } from "react-icons/fa6";

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <h1
        data-aos="fade-down"
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10"
      >
        Why Choose Us?
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          data-aos="fade-up"
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition border-t-4 border-indigo-500"
        >
          <FaStar className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Top Rated Courses</h2>
          <p className="text-gray-600">
            We bring you only the highest-quality courses for real skill growth.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition border-t-4 border-purple-500"
        >
          <FaUserFriends className="text-4xl text-purple-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Expert Instructors</h2>
          <p className="text-gray-600">
            Learn from industry professionals with proven experience.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition border-t-4 border-pink-500"
        >
          <FaBookOpen className="text-4xl text-pink-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Flexible Learning</h2>
          <p className="text-gray-600">
            Study at your own pace with accessible and easy-to-follow lessons.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition border-t-4 border-green-500"
        >
          <FaAward className="text-4xl text-green-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Certification</h2>
          <p className="text-gray-600">
            Earn certificates to enhance your portfolio and career path.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-16" data-aos="zoom-in">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="teamwork"
          className="rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default WhyUs;
