import React from "react";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <img
        src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1724067027/download-removebg-preview_ngzruz.png"
        alt=""
      />
      <button>
        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative"><Link to={"/"}>Go to Home Page</Link></span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </button>
    </div>
  );
};
