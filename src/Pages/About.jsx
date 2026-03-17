// import React from "react";
// import image from '../assets/Niamul.png'

// const About = () => {
//   return (
//     <section id="about" className="max-w-7xl mx-auto px-6 py-20">

//       <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 via-blue-500 to-green-500
//                           bg-[length:200%_100%] bg-clip-text text-transparent
//                           animate-[shine_3s_linear_infinite]">
//         About Me
//       </h1>

//       <div className="grid md:grid-cols-2 gap-10 items-center">

//         {/* Profile Image */}
//         <div className="flex justify-center relative">

//           {/* Glow Effect */}
//           <div className="absolute w-80 h-80 bg-gradient-to-r from-red-800 via-blue-900 to-green-700 rounded-2xl blur-2xl opacity-60 animate-pulse"></div>

//           {/* Image */}
//           <img
//             src={image}
//             alt="profile"
//             className="w-72 rounded-2xl shadow-lg relative"
//           />

//         </div>

//         {/* About Text */}
//         <div>

//           <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-500 via-blue-500 to-green-500
//                           bg-[length:200%_100%] bg-clip-text text-transparent
//                           animate-[shine_3s_linear_infinite]">
//             I'm Md Niamul Hossain
//           </h2>

//           <p className="text-gray-600 mb-4 bg-gradient-to-r from-red-500 via-blue-500 to-green-500
//                           bg-[length:200%_100%] bg-clip-text text-transparent
//                           animate-[shine_3s_linear_infinite]">
//             I am a passionate Frontend Web Developer who loves building
//             modern, responsive, and user-friendly websites. I enjoy turning
//             ideas into real web applications using modern technologies.
//           </p>

//           <p className="text-gray-600 mb-6 bg-gradient-to-r from-red-500 via-blue-500 to-green-500
//                           bg-[length:200%_100%] bg-clip-text text-transparent
//                           animate-[shine_3s_linear_infinite]">
//             I started my journey with HTML, CSS, and JavaScript, and later
//             moved to frameworks like React.js and Next.js. I always try to
//             create clean UI and smooth user experience.
//           </p>

//           {/* Skills */}
//           <div className="grid grid-cols-2 gap-3 mb-6 ">
//             <span className="bg-red-400 px-3 py-2 rounded">HTML</span>
//             <span className="bg-blue-500 px-3 py-2 rounded">CSS</span>
//             <span className="bg-green-400 px-3 py-2 rounded">JavaScript</span>
//             <span className="bg-yellow-400 px-3 py-2 rounded">React</span>
//             <span className="bg-amber-600 px-3 py-2 rounded">Next.js</span>
//             <span className="bg-cyan-400 px-3 py-2 rounded">Tailwind</span>
//             <span className="bg-red-800 px-3 py-2 rounded">MongoDb</span>
//             <span className="bg-amber-950 px-3 py-2 rounded">Tailwind</span>
//           </div>

//           {/* Button */}
//           {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
//             Contact Me
//           </button> */}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default About;

import React from "react";
import image from '../assets/Niamul.png';

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20 text-white">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12
        bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
        bg-clip-text text-transparent">
        About Me
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Profile Image */}
        <div className="flex justify-center relative">

          {/* Glow / Background */}
          <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 
            rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

          {/* Image */}
          <img
            src={image}
            alt="profile"
            className="w-72 rounded-2xl shadow-2xl relative z-10"
          />

        </div>

        {/* About Text */}
        <div className="space-y-4">

          <h2 className="text-2xl font-bold text-blue-400">
            I'm Md Niamul Hossain
          </h2>

          <p className="text-gray-300 leading-relaxed">
            I am a passionate Frontend Web Developer who loves building
            modern, responsive, and user-friendly websites. I enjoy turning
            ideas into real web applications using React, Next.js, and
            Tailwind CSS.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I started my journey with HTML, CSS, and JavaScript, and later
            moved to modern frameworks. My focus is always on creating clean
            UI and smooth user experiences.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full text-sm font-semibold">
              HTML
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full text-sm font-semibold">
              CSS
            </span>
            <span className="bg-gradient-to-r from-pink-500 to-red-500 px-3 py-1 rounded-full text-sm font-semibold">
              JavaScript
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
              React
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 rounded-full text-sm font-semibold">
              Next.js
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1 rounded-full text-sm font-semibold">
              Tailwind
            </span>
            <span className="bg-gradient-to-r from-green-500 to-teal-400 px-3 py-1 rounded-full text-sm font-semibold">
              MongoDB
            </span>
          </div>

          {/* Optional Button */}
          <div className="mt-6">
            <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition transform inline-block text-white font-semibold">
              Contact Me
            </a>
          </div>

        </div>
        
      </div>

    </section>
  );
};

export default About;