import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaTwitter,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="min-h-screen bg-accent p-3 lg:p-6 text-white">
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold text-white text-center py-10">
        Contact Us
      </h1>

      <div className="max-w-5xl grid-cols-1 mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT CARD */}
        <div
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/20"
          data-aos="fade-right"
        >
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl" />
              <p className="text-lg">+880 1234 567 890</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl" />
              <p className="text-lg">support@skillswap.com</p>
            </div>

            <div className="flex items-center gap-4">
              <FaLocationArrow className="text-2xl" />
              <p className="text-lg">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <h2 className="text-xl font-semibold mt-8 mb-3">Follow Us</h2>
          <div className="flex gap-5 text-3xl">
            <FaFacebook className="hover:text-blue-300 cursor-pointer duration-200" />
            <FaTwitter className="hover:text-blue-300 cursor-pointer duration-200" />
            <FaInstagram className="hover:text-pink-300 cursor-pointer duration-200" />
          </div>
        </div>

        {/* RIGHT CONTACT FORM */}
        <form
          className="bg-white p-8 rounded-xl shadow-xl text-gray-800"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full p-3 bg-primary text-white rounded-lg font-semibold text-lg transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
