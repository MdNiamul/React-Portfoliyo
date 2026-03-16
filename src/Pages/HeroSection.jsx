import React from 'react';
import imge from '../assets/niamul4.png';


const HeroSection = () => {
    return (
        <div>
            <section className="min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                    {/* <div>
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
                    </div> */}

                    <div>
                        <h2 className="text-gray-400 bg-gradient-to-r from-red-500 via-blue-500 to-green-500
                         bg-[length:200%_100%] bg-clip-text text-transparent
                         animate-[shine_3s_linear_infinite]">Hello I'm</h2>

                        <h1 className="text-5xl font-bold mt-2 
                           bg-gradient-to-r from-red-500 via-blue-500 to-green-500
                          bg-[length:200%_100%] bg-clip-text text-transparent
                          animate-[shine_3s_linear_infinite]">
                            Md Niamul Hossain
                        </h1>

                        <h3 className="text-2xl mt-3 
                           bg-gradient-to-r from-red-500 via-blue-500 to-green-500
                           bg-[length:200%_100%] bg-clip-text text-transparent
                           animate-[shine_3s_linear_infinite]">
                            Frontend Web Developer
                        </h3>

                        <p className="text-xl font-bold mt-2 
                          bg-gradient-to-r from-red-500 via-blue-500 to-green-500
                          bg-[length:200%_100%] bg-clip-text text-transparent
                          animate-[shine_3s_linear_infinite]">
                            I build modern responsive websites using React,
                            Tailwind CSS and modern technologies.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <button className="bg-blue-500 cursor-pointer px-6 py-3 rounded-lg hover:bg-blue-600 ">
                                Download Resume
                            </button>

                            <button className="border cursor-pointer border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500">
                                My Projects
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center min-h-screen">
                        {/* wrapper */}
                        <div className="relative w-80 h-80 flex items-center justify-center">

                            {/* spinning colored ring */}
                            <div className="absolute w-full h-full rounded-full border-4 border-t-blue-500 border-r-pink-500 border-b-purple-500 border-l-green-500 animate-spin"></div>

                            {/* inner black circle + image */}
                            <div className="absolute w-72 h-72 rounded-full bg-black flex items-center justify-center overflow-hidden">
                                <img
                                    src={imge}
                                    alt="profile"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default HeroSection;