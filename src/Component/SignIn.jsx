import React from "react";
import popcornImage from "../assets/boy2.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen sm:h-[660px] bg-gradient-to-b from-yellow-200 to-yellow-400 overflow-hidden">
      <div className="bg-white p-2 mx-4 sm:p-8 rounded-lg shadow-lg flex flex-col items-center gap-5 w-full max-w-md">
        <img className="w-24 mb-4" src={popcornImage} alt="Popcorn" />
        <h1 className="text-3xl font-bold text-gray-800">Welcome to KidFlix!</h1>
        <p className="text-gray-600 text-center">
          Sign in to explore a world of fun and exciting movies for kids.
        </p>
        <form className="flex flex-col gap-2 w-full">
          <label className="text-gray-800">Username:</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your username"
          />
          <label className="text-gray-800">Password:</label>
          <input
            type="password"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all"
          >
            Sign In
          </button>
        </form>
        <p className="text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
