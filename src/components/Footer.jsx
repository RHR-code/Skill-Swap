import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-100 py-20  flex flex-col gap-10 border-t mt-10">
      <a className="font-bold text-xl    md:text-3xl   text-accent">
        SkillSwap
      </a>
      <div className="footer sm:footer-horizontal  text-base-content">
        <nav>
          <h6 className="footer-title">Contact Info</h6>
          <a className="link link-hover">skillswap@gmail.com</a>
          <a className="link link-hover">+08801234567891</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/why-us" className="link link-hover">
            Why Us
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h2 className="max-w-50 font-bold text-lg">
            Connect with us through our socials
          </h2>
          <div className="flex text-2xl items-center gap-5 mt-5">
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
