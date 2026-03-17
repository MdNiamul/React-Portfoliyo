// import React, { useEffect, useState } from "react";

// const Project = () => {

//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetch("/Project.json")
//       .then(res => res.json())
//       .then(data => setProjects(data));
//   }, []);

//   // console.log(projects);

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20">

//       <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 via-blue-500 to-green-500
//                           bg-[length:200%_100%] bg-clip-text text-transparent
//                           animate-[shine_3s_linear_infinite]">
//         My Projects
//       </h1>

//       <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">

//         {projects.map((project) => (

//           <div
//             key={project.id}
//             className="bg-red-300 cursor-pointer rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
//           >

//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-60 object-cover"
//             />

//             <div className="p-6 flex flex-col flex-grow">

//               <h2 className="text-xl font-bold mb-2">
//                 {project.title}
//               </h2>

//               <p className="text-green-900 mb-4">
//                 {project.description}
//               </p>

//               {/* Buttons always bottom */}
//               <div className="flex gap-3 mt-auto">

//                 <a
//                   href={project.live}
//                   target="_blank"
//                   className="bg-blue-600 text-white px-4 py-2 rounded-2xl"
//                 >
//                   Live
//                 </a>

//                 <a
//                   href={project.github}
//                   target="_blank"
//                   className="bg-gray-800 text-white px-4 py-2 rounded-2xl"
//                 >
//                   GitHub
//                 </a>

//               </div>

//             </div>

//           </div>

//         ))}

//       </div>

//     </section>
//   );
// };

// export default Project;

import React, { useEffect, useState } from "react";

const Project = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/Project.json")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <section id='Projects' className="max-w-7xl mx-auto px-6 py-20 text-white ">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-4 
        bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
        bg-clip-text text-transparent">
        My Projects
      </h1>

      <p className="text-gray-400 text-center mb-12">
        Some of my recent works and real-world projects.
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (

          <div
            key={project.id}
            className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden 
            hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">

              <h2 className="text-xl font-semibold mb-2">
                {project.title}
              </h2>

              <p className="text-gray-400 mb-4 text-sm">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">

                <a
                  href={project.live}
                  target="_blank"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="border border-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Project;