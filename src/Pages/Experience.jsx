// import React, { useEffect, useState } from "react";

// const Experience = () => {
//     const [experiences, setExperiences] = useState([]);

//     useEffect(() => {
//         fetch("/Experience.json")
//             .then((res) => res.json())
//             .then((data) => setExperiences(data))
//             .catch((err) => console.log(err));
//     }, []);

//     return (
//         <section id="experience" className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-r from-red-500 via-blue-500 to-green-500
//                           bg-[length:200%_100%] bg-clip-text text-transparent
//                           animate-[shine_3s_linear_infinite]">
//             <h1 className="text-4xl font-bold text-center mb-12">Experience</h1>

//             <div className="space-y-8 ">
//                 {experiences.map((exp) => (
//                     <div
//                         key={exp.id}
//                         className="bg-base-700 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 bg-gradient-to-r from-red-500 via-blue-500 to-green-500
//                           bg-[length:200%_100%] bg-clip-text text-transparent
//                           animate-[shine_3s_linear_infinite]"
//                     >
//                         <div className="flex justify-between items-center mb-2">
//                             <h2 className="text-2xl text-green-500 font-semibold">{exp.title}</h2>
//                             <div className="grid grid-cols-1 place-items-center">
//                                 <span className="text-gray-500">{exp.year}</span>
//                                 <span className="text-gray-500">{exp.duration}</span>
                                
//                             </div>
//                         </div>
//                         <h3 className="text-gray-700 mb-2">{exp.company}</h3>
//                         <p className="text-gray-600">{exp.details}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Experience;

import React, { useEffect, useState } from "react";

const Experience = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch("/Experience.json")
            .then((res) => res.json())
            .then((data) => setExperiences(data));
    }, []);

    return (
        <section id="experience" className="max-w-6xl mx-auto px-6 py-24 text-white">

            {/* Title */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold 
                    bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
                    bg-clip-text text-transparent">
                    Experience
                </h1>

                <p className="text-gray-400 mt-3">
                    My professional journey & real-world experience
                </p>
            </div>

            {/* Timeline */}
            <div className="relative border-l border-gray-700">
              
                {experiences.map((exp, 
                // eslint-disable-next-line
                index) => (
                    <div key={exp.id} className="mb-12 ml-8 relative group">

                        {/* Glow Dot */}
                        <span className="absolute -left-4 w-5 h-5 rounded-full 
                            bg-gradient-to-r from-blue-500 to-purple-500
                            shadow-lg shadow-purple-500/50
                            group-hover:scale-125 transition">
                        </span>

                        {/* Card */}
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 
                            rounded-2xl p-6 transition duration-500
                            hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">

                            {/* Top */}
                            <div className="flex justify-between items-center mb-3">

                                <h2 className="text-xl font-semibold">
                                    {exp.title}
                                </h2>

                                <span className="text-xs px-3 py-1 rounded-full 
                                    bg-gradient-to-r from-blue-500 to-purple-500">
                                    {exp.year}
                                </span>
                            </div>

                            {/* Company */}
                            <h3 className="text-gray-300 mb-2 text-sm">
                                {exp.company} • {exp.duration}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {exp.details}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default Experience;