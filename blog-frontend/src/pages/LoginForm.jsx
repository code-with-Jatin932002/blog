
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  // State for managing form data
  const [formData, setFormData] = useState({ email: "", password: "" });
  // State for displaying popups (success/error messages)
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });
  // State for handling loading status during login request
  const [loading, setLoading] = useState(false); // ✅ Loader state

  const navigate = useNavigate();
  const { login } = useAuth();

  // Handles input field changes and updates the form state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission and authentication
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ Start loader
    try {
      // Send login request to backend API
      const response = await axios.post("http://localhost:5001/api/auth/login", formData);

      // Store user data and token upon successful login
      login(response.data.user);
      localStorage.setItem("token", response.data.token);

      // Show success message and redirect to the inside page
      setPopup({ show: true, message: "✅ Login Successful!", type: "success" });

      setTimeout(() => {
        setPopup({ show: false, message: "", type: "" });
        navigate("/inside", { replace: true }); // Navigate to dashboard
      }, 1000);
    } catch (error) {

      // Show error message if login fails
      setPopup({
        show: true,
        message: "❌ Login Failed: " + (error.response?.data?.message || "Please try again."),
        type: "error",
      });
      // Hide popup after 3 seconds
      setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
    } finally {
      setLoading(false); // ✅ Stop loader after request
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

 {/* Popup message for success or error */}
        {popup.show && (
          <div className={`fixed top-5 right-5 px-4 py-2 rounded shadow-md ${popup.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
            {popup.message}
          </div>
        )}

{/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" name="email" placeholder="Email" className="p-3 border rounded-lg w-full" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="p-3 border rounded-lg w-full" onChange={handleChange} required />

 {/* Login button with loading state */}
          <button 
            type="submit" 
            className="bg-green-500 text-white px-6 py-3 rounded-lg w-full hover:bg-green-600 transition flex items-center justify-center cursor-pointer"
            disabled={loading} // ✅ Disable button while loading
          >
            {loading ? (
              // Loading spinner when request is in progress
              <svg className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg> // ✅ Loader icon
            ) : "Login"}
          </button>
        </form>

{/* Redirect link to signup page */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <Link to="/signup" className="text-green-500 font-medium hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;






