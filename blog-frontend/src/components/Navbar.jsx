
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import AuthContext
import { FaTwitter, FaFacebook, FaGlobe } from "react-icons/fa"; // Icons
import logo from "../assets/download.jpg";

const Navbar = () => {
  const { user, logout } = useAuth(); // Get user & logout function from AuthContext
  const location = useLocation(); // Get current route

  // ✅ Show Login & Signup only on Home Page ("/") if NOT authenticated
  const showAuthButtons = location.pathname === "/" && !user;

  return (
    <nav className="bg-gray-900 p-4 text-white flex justify-between items-center shadow-md">
      {/* 🔹 Left Section - Logo & Blog App Name */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        <h1 className="text-2xl font-bold tracking-wide flex items-center">
          Blog App
        </h1>
      </div>

      {/* 🔹 Right Section - Icons & Buttons */}
      <div className="flex items-center space-x-5 ">
        {/* Icons outside buttons */}
        <div className="flex items-center space-x-4 mr-6">
          <FaTwitter className="text-white-400 text-xl" />
          <FaFacebook className="text-white-600 text-xl" />
          <FaGlobe className="mr-2 text-white-400 text-xl" />
        </div>

        {showAuthButtons && (
          <>
            <Link
              to="/login"
              className="bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Sign Up
            </Link>
          </>
        )}

        {user && (
          <button
            onClick={() => logout()}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;




