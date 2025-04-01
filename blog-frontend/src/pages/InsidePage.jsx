// import React from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const InsidePage = () => {
//   const { user, logout } = useAuth(); // Get user and logout function
//   const navigate = useNavigate();

//   // If user is not logged in, redirect to login
//   if (!user) {
//     navigate("/login");
//     return null;
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Welcome to the Website! 🎉</h2>
//       <p>Hello, {user?.email}! You have successfully logged in.</p>
//       <button onClick={logout} style={{ padding: "10px", cursor: "pointer" }}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default InsidePage;





// import React from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import CreatePost from "./CreatePost";

// const InsidePage = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   // Redirect to login if user is not logged in
//   if (!user) {
//     navigate("/login");
//     return null;
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl text-center">Welcome to the Website! 🎉</h2>
//       <p className="text-center">Hello, {user?.email}! You have successfully logged in.</p>
      
//       {/* Logout Button */}
//       <div className="text-center my-4">
//         <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
//           Logout
//         </button>
//       </div>

//       {/* Dashboard Section */}
//       <div className="mt-6">
//         <h3 className="text-xl font-bold mb-2">Your Dashboard</h3>
//         <Dashboard />
//       </div>

//       {/* Create Post Section */}
//       <div className="mt-6">
//         <h3 className="text-xl font-bold mb-2">Create a New Post</h3>
//         <CreatePost />
//       </div>
//     </div>
//   );
// };

// export default InsidePage;









// import React from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import Dashboard from "./Dashboard"; // Shows posts
// import CreatePost from "./CreatePost"; // Form to add new posts

// const InsidePage = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   // Redirect to login if user is not logged in
//   if (!user) {
//     navigate("/login");
//     return null;
//   }

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
//       {/* Welcome Section */}
//       <div className="text-center mb-6">
//         <h2 className="text-3xl font-bold text-blue-700">Welcome to the Blog Platform 🎉</h2>
//         <p className="text-gray-700 mt-2 text-lg">Hello, {user?.email}! You are successfully logged in.</p>
//       </div>

//       {/* Main Content: Dashboard & Create Post Section */}
//       <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
//         {/* Create Post Section */}
//         <div className="mb-6">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-3">Create a New Post 📝</h3>
//           <CreatePost />
//         </div>

//         {/* Dashboard Section - Displaying Blogs */}
//         <div>
//           <h3 className="text-2xl font-semibold text-gray-800 mb-3">Latest Blogs 📢</h3>
//           <Dashboard />
//         </div>
//       </div>

//       {/* Logout Button (Centered & Bottom) */}
//       <div className="mt-auto w-full text-center py-6">
//         <button
//           onClick={logout}
//           className="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded shadow-md"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InsidePage;







// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import CreatePost from "./CreatePost";

// const InsidePage = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [activeSection, setActiveSection] = useState("dashboard"); // Default to dashboard

//   // Redirect to login if user is not logged in
//   if (!user) {
//     navigate("/login");
//     return null;
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-lg p-6 flex flex-col">
//         {/* User Info */}
//         <div className="text-center mb-6">
//           <h2 className="text-xl font-bold text-blue-700">{user.email.split("@")[0]}</h2>
//           <p className="text-gray-500 text-sm">{user.email}</p>
//         </div>

//         {/* Sidebar Navigation */}
//         <nav className="flex flex-col space-y-4">
//           <button
//             className={`p-3 rounded-lg text-left ${
//               activeSection === "createpost" ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => setActiveSection("createpost")}
//           >
//             ✍️ Create Post
//           </button>

//           <button
//             className={`p-3 rounded-lg text-left ${
//               activeSection === "dashboard" ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => setActiveSection("dashboard")}
//           >
//             📢 Dashboard
//           </button>
//         </nav>

//         {/* Logout Button */}
//         <div className="mt-auto text-center">
//           <button
//             onClick={logout}
//             className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded mt-6"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {activeSection === "createpost" ? (
//           <CreatePost onPostCreated={() => setActiveSection("dashboard")} />
//         ) : (
//           <Dashboard />
//         )}
//       </div>
//     </div>
//   );
// };

// export default InsidePage;





// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import CreatePost from "./CreatePost";

// const InsidePage = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [activeSection, setActiveSection] = useState(""); // Default to empty (welcome page)

//   // Redirect to login if user is not logged in
//   if (!user) {
//     navigate("/login");
//     return null;
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-lg p-6 flex flex-col">
//         {/* User Info */}
//         <div className="text-center mb-6">
//           <h2 className="text-xl font-bold text-blue-700">{user.email.split("@")[0]}</h2>
//           <p className="text-gray-500 text-sm">{user.email}</p>
//         </div>

//         {/* Sidebar Navigation */}
//         <nav className="flex flex-col space-y-4">
//           <button
//             className={`p-3 rounded-lg text-left ${
//               activeSection === "createpost" ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => setActiveSection("createpost")}
//           >
//             ✍️ Create Post
//           </button>

//           <button
//             className={`p-3 rounded-lg text-left ${
//               activeSection === "dashboard" ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => setActiveSection("dashboard")}
//           >
//             📢 Dashboard
//           </button>
//         </nav>

//         {/* Logout Button */}
//         <div className="mt-auto text-center">
//           <button
//             onClick={logout}
//             className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded mt-6"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {activeSection === "" ? (
//           <div className="text-center mb-6">
//             <h2 className="text-3xl font-bold text-blue-700">Welcome to the Blog Platform 🎉</h2>
//             <p className="text-gray-700 mt-2 text-lg">Hello, {user?.email}! You are successfully logged in.</p>
//           </div>
//         ) : activeSection === "createpost" ? (
//           <CreatePost onPostCreated={() => setActiveSection("dashboard")} />
//         ) : (
//           <Dashboard />
//         )}
//       </div>
//     </div>
//   );
// };

// export default InsidePage;






import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import CreatePost from "./CreatePost";

const InsidePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Prevent rendering when user is null
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-blue-700">{user.email.split("@")[0]}</h2>
          <p className="text-gray-500 text-sm">{user.email}</p>
        </div>

        <nav className="flex flex-col space-y-4">
          <button
            className={`p-3 rounded-lg text-left ${activeSection === "createpost" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveSection("createpost")}
          >
            ✍️ Create Post
          </button>

          <button
            className={`p-3 rounded-lg text-left ${activeSection === "dashboard" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveSection("dashboard")}
          >
            📢 Dashboard
          </button>
        </nav>

        <div className="mt-auto text-center">
          <button
            onClick={() => {
              logout();
              navigate("/login" , { replace: true }  ); // Ensure proper redirection after logout
            }}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded mt-6"
          >
            Logout
          </button>
        </div>


      </div>

      <div className="flex-1 p-6">
        {activeSection === "" ? (
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-700">Welcome to the Blog Platform 🎉</h2>
            <p className="text-gray-700 mt-2 text-lg">Hello, {user?.email}! You are successfully logged in.</p>
          </div>
        ) : activeSection === "createpost" ? (
          <CreatePost onPostCreated={() => setActiveSection("dashboard")} />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
};

export default InsidePage;









