import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mt-20 font-aeoniik_regular h-screen flex flex-row-reverse justify-center mb-8">
      <form className="flex-1 flex flex-col items-center justify-center mt-14 ">
        <div className="flex flex-col justify-center items-center gap-2 ">
          <h2 className="text-2xl font-aeoniik_bold ">
            Create your account
          </h2>
          <p className="text-gray-500 font-medium text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 items-start">
              <label htmlFor="firstName" className="font-aeoniik_bold">
                First Name
              </label>
              <input
                required
                className=" px-2 rounded-md w-full h-9 border-2 border-gray-300"
                type="text"
                id="firstName"
                placeholder="Firstname"
              />
            </div>
            <div className="flex flex-col gap-1 items-start">
              <label htmlFor="lastName" className="font-aeoniik_bold">
                Last Name
              </label>
              <input
                required
                className=" px-2 rounded-md w-full h-9 border-2 border-gray-300"
                type="text"
                id="lastName"
                placeholder="Lastname"
              />
            
            </div>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <label htmlFor="username" className="font-aeoniik_bold">
              Username
            </label>
            <input
              required
              className=" px-2 rounded-md w-full h-9 border-2 border-gray-300"
              type="text"
              placeholder="Username"
              id="userName"
            />
          </div>
          <div className="flex flex-col gap-1 items-start">
            <label htmlFor="email" className="font-aeoniik_bold">
              Email
            </label>
            <input
              required
              className=" px-2 rounded-md w-full h-9 border-2 border-gray-300"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-1 items-start">
            <label htmlFor="password" className="font-aeoniik_bold">
              Password
            </label>
            <input
              required
              className=" px-2 rounded-md w-full h-9 border-2 border-gray-300"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col gap-1 items-start">
            <label htmlFor="password" className="font-aeoniik_bold">
              Confirm Password
            </label>
            <input
              required
              className=" px-2 rounded-md w-full h-9 border-2 border-gray-300"
              type="password"
              id="confirm_password"
              placeholder="Confirm password"
            />
          </div>
          <button className=" mt-3 w-full px-3 py-3 bg-red-500 rounded-md font-aeoniik_regular">
          Register
        </button>
        </div>
        
        <p className="mt-3 mb-10">Already have an account? <Link to={"/login"}>Sign In</Link></p>
      </form>

      <div>
        <img
          className="h-screen flex-1
        "
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1724321201/Fingerprint-pana_di6yyj.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
