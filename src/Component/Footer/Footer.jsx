import React from "react";
import { NavLink } from "react-router";
import Links from "../LInks/Links";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-2xl font-bold mb-4">
          Niamul<span className="text-blue-400">Dev</span>
        </h2>

        <ul className="flex justify-center gap-6">
          {Links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
                    : "hover:text-blue-400 transition"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-gray-400">
          © 2026 Niamul Hossain. All rights reserved.
        </p>

      </div>
      
    </footer>
  );
};

export default Footer;