import React, { useState } from "react";

import NavLinks from "../LInks/Links";
import { NavLink } from "react-router";
import Links from "../LInks/Links";


const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-400">
          Niamul <span className='text-red-500'>Dev.</span>
        </h1>


        <ul className="hidden md:flex gap-8 font-medium">
          {Links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                    : "hover:text-blue-400"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>


      {open && (
        <ul className="md:hidden bg-gray-900 text-center py-4 space-y-4">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;