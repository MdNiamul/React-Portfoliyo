import React from "react";

const Skills = () => {

  const skills = [
    { name: "HTML", percent: 90, icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { name: "CSS", percent: 85, icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { name: "Tailwind", percent: 80, icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "JavaScript", percent: 85, icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "React", percent: 80, icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { name: "Next.js", percent: 70, icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "Node.js", percent: 65, icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    { name: "MongoDB", percent: 60, icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-red-500 via-blue-500 to-green-500
                          bg-[length:200%_100%] bg-clip-text text-transparent
                          animate-[shine_3s_linear_infinite]">My Skills</h2>

        <div className="grid cursor-pointer grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl transition duration-500"
            >

              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-4"
              />

              <h3 className="font-semibold mb-3">{skill.name}</h3>

              <div className="w-full bg-gray-200 rounded-full h-3">

                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.percent}%` }}
                ></div>

              </div>

              <p className="mt-2 text-sm text-gray-600">
                {skill.percent}%
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;