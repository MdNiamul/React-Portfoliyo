import React, { useEffect, useState } from "react";

const Project = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/Project.json")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  // console.log(projects);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 via-blue-500 to-green-500
                          bg-[length:200%_100%] bg-clip-text text-transparent
                          animate-[shine_3s_linear_infinite]">
        My Projects
      </h1>

      <div className="grid cursor-pointer md:grid-cols-2 lg:grid-cols-3 gap-8 ">

        {projects.map((project) => (

          <div
            key={project.id}
            className="bg-red-300 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-6">

              <h2 className="text-xl font-bold mb-2">
                {project.title}
              </h2>

              <p className="text-green-900 mb-4">
                {project.description}
              </p>

              <div className="flex gap-3">

                <a
                  href={project.live}
                  target="_blank"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="bg-gray-800 text-white px-4 py-2 rounded"
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