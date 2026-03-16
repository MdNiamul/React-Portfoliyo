import React from 'react';
import imge from '../assets/niamul4.png';


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

                    <div className="flex justify-center items-center min-h-screen bg-gray-900">
                        {/* বাইরের ঘূর্ণন রিং */}
                        <div
                            className="w-96 h-96 rounded-full p-0.5 flex items-center justify-center
               bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500
               shadow-lg"
                            style={{ animation: "spin 8s linear infinite" }} // বাইরের রিং ঘুরবে
                        >
                            {/* ভিতরের স্থির কালো বৃত্ত */}
                            <div className="w-80 h-80 rounded-full bg-black flex items-center justify-center overflow-hidden">
                                {/* প্রোফাইল ছবি - স্থির থাকবে */}
                                <img
                                    src={imge} // এখানে তোমার image variable বা path বসাবে
                                    alt="profile"
                                    className="w-72 h-72 rounded-full object-cover"
                                />
                            </div>

                            {/* div এর ভিতরেই keyframes */}
                            <style>
                                {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}
                            </style>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default HeroSection;