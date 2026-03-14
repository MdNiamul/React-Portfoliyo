import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-5">

      <h1 className="text-7xl md:text-9xl font-bold text-blue-500">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-400 mt-3 max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link to="/">
        <button className="mt-6 cursor-pointer bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition duration-300">
          Back To Home
        </button>
      </Link>

    </div>
  );
};

export default ErrorPage;