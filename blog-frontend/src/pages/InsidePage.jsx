
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import CreatePost from "./CreatePost";

const InsidePage = () => {
    // 🔹 Authentication aur Navigation hooks
  const { user, logout } = useAuth();
  const navigate = useNavigate();

    // 🔹 Active section ko track karne ke liye state (Dashboard ya Create Post)
  const [activeSection, setActiveSection] = useState("");

   // 🔹 Agar user logged in nahi hai, to login page par redirect kar do
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

   // 🔹 Agar user null hai, to kuch bhi render na karo (Avoid unnecessary rendering)
  if (!user) {
    return null; // Prevent rendering when user is null
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 🔹 Sidebar Section */}
      <div className="w-64 bg-white shadow-lg p-6 flex flex-col">
        {/* 🔹 User Info Section */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-blue-700">{user.email.split("@")[0]}</h2>
          <p className="text-gray-500 text-sm">{user.email}</p>
        </div>

 {/* 🔹 Navigation Buttons */}
        <nav className="flex flex-col space-y-4">
          <button
            className={`p-3 rounded-lg text-left transition cursor-pointer ${activeSection === "createpost" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300 hover:text-black"}`}
            onClick={() => setActiveSection("createpost")}
          >
            ✍️ Create Post
          </button>

          <button
            className={`p-3 rounded-lg text-left transition cursor-pointer ${activeSection === "dashboard" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300 hover:text-black"}`}
            onClick={() => setActiveSection("dashboard")}
          >
            📢 Dashboard
          </button>
        </nav>

{/* 🔹 Logout Button */}
        <div className="mt-auto text-center">
          <button
            onClick={() => {
              logout();
              navigate("/login" , { replace: true }  ); // Ensure proper redirection after logout
            }}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded mt-6 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>

 {/* 🔹 Main Content Area */}
      <div className="flex-1 p-6">
        {activeSection === "" ? (
          // 🔹 Default Welcome Screen
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-700">Welcome to the Blog Platform 🎉</h2>
            <p className="text-gray-700 mt-2 text-lg">Hello, {user?.email}! You are successfully logged in.</p>
          </div>
        ) : activeSection === "createpost" ? (
           // 🔹 Create Post Component
          <CreatePost onPostCreated={() => setActiveSection("dashboard")} />
        ) : (
          // 🔹 Dashboard Component
          <Dashboard />
        )}
      </div>
    </div>
  );
};

export default InsidePage;









