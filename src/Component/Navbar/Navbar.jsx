// import React, { useState } from "react";

// import NavLinks from "../LInks/Links";
// import { NavLink } from "react-router";
// import Links from "../LInks/Links";


// const Navbar = () => {
//   const [open, setOpen] = useState(false);


//   return (
//     <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg">
//       <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

//         <h1 className="text-2xl font-bold text-blue-400">
//           Niamul <span className='text-red-500'>Dev.</span>
//         </h1>


//         <ul className="hidden md:flex gap-8 font-medium">
//           {Links.map((link, index) => (
//             <li key={index}>
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-400 border-b-2 border-blue-400 pb-1"
//                     : "hover:text-blue-400"
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
//           ☰
//         </button>
//       </div>


//       {open && (
//         <ul className="md:hidden bg-gray-900 text-center py-4 space-y-4">
//           {NavLinks.map((link, index) => (
//             <li key={index}>
//               <NavLink to={link.path}>{link.name}</NavLink>
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // use react-router-dom
import Links from "../LInks/Links"; // single import for all links

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400 cursor-pointer">
          Niamul <span className="text-red-500">Dev.</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          {Links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-all duration-300 ${
                    isActive
                      ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                      : "hover:text-blue-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl p-2 focus:outline-none hover:text-blue-400 transition"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900 text-white overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {Links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                onClick={() => setOpen(false)}
                className="hover:text-blue-400 transition text-lg"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;