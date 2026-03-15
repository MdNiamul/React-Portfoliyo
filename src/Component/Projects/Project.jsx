import React from "react";
import { useLoaderData } from "react-router-dom";

const Project = () => {

  const projects = useLoaderData() || [];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (

          <div
            key={project.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">

              <h2 className="text-xl font-bold mb-2">
                {project.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="flex gap-3">

                <a
                  href={project.live}
                  target="_blank"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-black transition"
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