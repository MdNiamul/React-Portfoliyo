import React, { useEffect, useState } from "react";

const Experience = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch("/Experience.json")
            .then((res) => res.json())
            .then((data) => setExperiences(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <section id="experience" className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-r from-red-500 via-blue-500 to-green-500
                          bg-[length:200%_100%] bg-clip-text text-transparent
                          animate-[shine_3s_linear_infinite]">
            <h1 className="text-4xl font-bold text-center mb-12">Experience</h1>

            <div className="space-y-8 ">
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        className="bg-red-300 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-2xl text-green-500 font-semibold">{exp.title}</h2>
                            <div className="grid grid-cols-1 place-items-center">
                                <span className="text-gray-500">{exp.duration}</span>
                                <span className="text-gray-500">{exp.year}</span>
                            </div>
                        </div>
                        <h3 className="text-gray-700 mb-2">{exp.company}</h3>
                        <p className="text-gray-600">{exp.details}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;