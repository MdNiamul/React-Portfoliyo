import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-5 mt-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-3">
            Niamul
          </h2>
          <p className="text-sm">
            I'm a passionate web developer who loves building modern,
            responsive, and user-friendly websites using React,
            Tailwind CSS and modern technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Quick Links
          </h2>

          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Follow Me
          </h2>

          <div className="flex gap-4 text-2xl">

            <a className="hover:text-blue-400 cursor-pointer">
              <FaFacebook />
            </a>

            <a className="hover:text-blue-400 cursor-pointer">
              <FaGithub />
            </a>

            <a className="hover:text-blue-400 cursor-pointer">
              <FaLinkedin />
            </a>

            <a className="hover:text-blue-400 cursor-pointer">
              <FaTwitter />
            </a>

          </div>
        </div>

      </div>

      {/* bottom */}
      <div className="text-center mt-10 border-t border-gray-700 pt-5 text-sm">
        © 2026 <span className="text-blue-400">Niamul Hossain</span> | All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;