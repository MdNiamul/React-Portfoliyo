import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <section className="min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h2 className="text-gray-400">Hello I'm</h2>

                        <h1 className="text-5xl font-bold mt-2">
                            Md Niamul <span className="text-blue-500">Hossain</span>
                        </h1>

                        <h3 className="text-2xl mt-3 text-gray-300">
                            Frontend Web Developer
                        </h3>

                        <p className="text-gray-400 mt-4 max-w-lg">
                            I build modern responsive websites using React,
                            Tailwind CSS and modern technologies.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <button className="bg-blue-500 cursor-pointer px-6 py-3 rounded-lg hover:bg-blue-600">
                                Download Resume
                            </button>

                            <button className="border cursor-pointer border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500">
                                My Projects
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co/4pDNDk1/avatar.png"
                            alt=""
                            className="w-80 rounded-full border-4 border-blue-500"
                        />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default HeroSection;