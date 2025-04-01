// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const { user, logout } = useAuth();

//   return (
//     <nav className="bg-gray-900 text-white p-4 flex justify-between">
//       <h1 className="text-xl font-bold">Blog App</h1>
//       <div>
//         <Link className="mr-4" to="/">Home</Link>
//         {user ? (
//           <>
//             <Link className="mr-4" to="/dashboard">Dashboard</Link>
//             <button onClick={logout} className="bg-red-500 px-4 py-1 rounded">Logout</button>
//           </>
//         ) : (
//           <Link className="mr-4" to="/login">Login</Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-500 p-4 text-white flex justify-between">
//       <h1 className="text-xl font-bold">Blog App</h1>
//       <div>
//         <Link to="/dashboard" className="mr-4">Dashboard</Link>
//         <Link to="/create">Create Post</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/download.jpg"; // ✅ Add your logo image in /assets folder

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
//       {/* 🔹 Left Section - Logo & Blog App Name */}
//       <div className="flex items-center space-x-3">
//         <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />  {/* ✅ Logo Added */}
//         <h1 className="text-2xl font-bold tracking-wide">Blog App</h1>
//       </div>

//       {/* 🔹 Right Section - Navigation Links */}
//       <div className="space-x-6 text-lg">

//       <Link to="/login" className="mr-4 hover:underline">Login</Link>
//       <Link to="/signup" className="hover:underline">Sign Up</Link>


//         <Link to="/dashboard" className="hover:text-gray-200 transition">Dashboard</Link>
//         <Link to="/create" className="hover:text-gray-200 transition">Create Post</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/download.jpg";

// const Navbar = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token); // ✅ Check if token exists
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token"); // ✅ Remove token on logout
//     setIsAuthenticated(false);
//     window.location.reload();
//   };

//   return (
//     <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
//       {/* 🔹 Left Section - Logo & Blog App Name */}
//       <div className="flex items-center space-x-3">
//         <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
//         <h1 className="text-2xl font-bold tracking-wide">Blog App</h1>
//       </div>

//       {/* 🔹 Right Section - Navigation Links */}
//       <div className="space-x-6 text-lg">
//         {!isAuthenticated ? (
//           <>
//             <Link to="/login" className="hover:underline">Login</Link>
//             <Link to="/signup" className="hover:underline">Sign Up</Link>
//           </>
//         ) : (
//           <>
//             <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded-md">
//               Logout
//             </button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/download.jpg";

// const Navbar = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const location = useLocation(); // ✅ Get current route

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//     window.location.reload();
//   };

//   // ✅ Show Login & Signup only on Home Page ("/")
//   const showAuthButtons = location.pathname === "/" && !isAuthenticated;

//   return (
//     <nav className="bg-gray-900 p-4 text-white flex justify-between items-center shadow-md">
//       {/* 🔹 Left Section - Logo & Blog App Name */}
//       <div className="flex items-center space-x-3">
//         <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
//         <h1 className="text-2xl font-bold tracking-wide">Blog App</h1>
//       </div>

//       {/* 🔹 Right Section - Navigation Links */}
//       <div className="space-x-6 text-lg">
//         {showAuthButtons ? (
//           <>
//             <Link to="/login" className="hover:underline">Login</Link>
//             <Link to="/signup" className="hover:underline">Sign Up</Link>
//           </>
//         ) : isAuthenticated ? (


//           <button
//             onClick={handleLogout}
//             className="bg-red-500 px-4 py-2 rounded-md fixed bottom-4 left-1/2 transform -translate-x-1/2"
//           >
//             Logout
//           </button>



//         ) : null}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; // Import AuthContext
// import logo from "../assets/download.jpg";

// const Navbar = () => {
//   const { user } = useAuth(); // Get user from AuthContext
//   const location = useLocation(); // Get current route

//   // ✅ Show Login & Signup only on Home Page ("/") if NOT authenticated
//   const showAuthButtons = location.pathname === "/" && !user;

//   return (
//     <nav className="bg-gray-900 p-4 text-white flex justify-between items-center shadow-md">
//       {/* 🔹 Left Section - Logo & Blog App Name */}
//       <div className="flex items-center space-x-3">
//         <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
//         <h1 className="text-2xl font-bold tracking-wide">Blog App</h1>
//       </div>

//       {/* 🔹 Right Section - Navigation Links */}
//       <div className="space-x-6 text-lg flex items-center">
//         {showAuthButtons && (
//           <>
//             <Link to="/login" className="hover:underline">Login</Link>
//             <Link to="/signup" className="hover:underline">Sign Up</Link>
//           </>
//         )}
//         {user && <p className="font-bold">Welcome, {user.name}</p>}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import AuthContext
import { FaTwitter, FaFacebook, FaGlobe } from "react-icons/fa"; // Icons
import logo from "../assets/download.jpg";

const Navbar = () => {
  const { user } = useAuth(); // Get user from AuthContext
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

        {user && <p className="font-bold">Welcome, {user.name}</p>}
      </div>
    </nav>
  );
};

export default Navbar;









