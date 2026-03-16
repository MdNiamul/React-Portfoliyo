import React from "react";
import image from '../assets/Niamul.png'

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        About Me
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="profile"
            className="w-72 rounded-2xl shadow-lg"
          />
        </div>

        {/* About Text */}
        <div>

          <h2 className="text-2xl font-bold mb-4">
            I'm Md Niamul Hossain
          </h2>

          <p className="text-gray-600 mb-4">
            I am a passionate Frontend Web Developer who loves building
            modern, responsive, and user-friendly websites. I enjoy turning
            ideas into real web applications using modern technologies.
          </p>

          <p className="text-gray-600 mb-6">
            I started my journey with HTML, CSS, and JavaScript, and later
            moved to frameworks like React.js and Next.js. I always try to
            create clean UI and smooth user experience.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <span className="bg-gray-400 px-3 py-2 rounded">HTML</span>
            <span className="bg-gray-500 px-3 py-2 rounded">CSS</span>
            <span className="bg-gray-400 px-3 py-2 rounded">JavaScript</span>
            <span className="bg-gray-400 px-3 py-2 rounded">React</span>
            <span className="bg-gray-400 px-3 py-2 rounded">Next.js</span>
            <span className="bg-gray-400 px-3 py-2 rounded">Tailwind</span>
            <span className="bg-gray-400 px-3 py-2 rounded">MongoDb</span>
            <span className="bg-gray-400 px-3 py-2 rounded">Tailwind</span>
          </div>

          {/* Button */}
          {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Contact Me
          </button> */}

        </div>

      </div>

    </section>
  );
};

export default About;