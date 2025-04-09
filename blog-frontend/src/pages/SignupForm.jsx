
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
  // ✅ State to manage form input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });

  // ✅ State to manage popup messages (success/error notifications)
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  // ✅ State to handle loading state while submitting the form
  const [loading, setLoading] = useState(false); // ✅ Loader state

  // ✅ Hook to navigate programmatically after signup
  const navigate = useNavigate();

   // ✅ Function to update form fields when user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // ✅ Start loader

    try {
      // ✅ Send signup request to backend
      await axios.post("http://localhost:5001/api/auth/signup", formData);
      // ✅ Show success message
      setPopup({ show: true, message: "✅ Signup Successful!", type: "success" });

      // ✅ Reset form and navigate after a short delay
      setTimeout(() => {
        setPopup({ show: false, message: "", type: "" });
        setFormData({ firstName: "", lastName: "", email: "", mobile: "", password: "" }); // ✅ Clear form
        navigate("/"); // ✅ Redirect to home page
      }, 2000);
      
    } catch (error) {
      // ✅ Handle errors and show failure message
      setPopup({
        show: true,
        message: "❌ Signup Failed: " + (error.response?.data?.message || "Please try again."),
        type: "error",
      });
    } finally {
      setLoading(false); // ✅ Stop loader after request
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

  {/* ✅ Display popup notification for success or error */}
        {popup.show && (
          <div className={`fixed top-5 right-5 px-4 py-2 rounded shadow-md ${popup.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
            {popup.message}
          </div>
        )}

{/* ✅ Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ✅ Input fields for user details */}
          <input type="text" name="firstName" placeholder="First Name" className="p-3 border rounded-lg w-full" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" className="p-3 border rounded-lg w-full" value={formData.lastName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="p-3 border rounded-lg w-full" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="mobile" placeholder="Mobile" className="p-3 border rounded-lg w-full" value={formData.mobile} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="p-3 border rounded-lg w-full" value={formData.password} onChange={handleChange} required />

{/* ✅ Signup Button with loading indicator */}
          <button 
            type="submit" 
            className="bg-green-500 text-white px-6 py-3 rounded-lg w-full hover:bg-green-600 transition flex items-center justify-center cursor-pointer"
            disabled={loading} // ✅ Disable button while loading
          >
            {loading ? (
              // ✅ Loading spinner icon
              <svg className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg> // ✅ Loader icon
            ) : "Sign Up"}
          </button>
        </form>

 {/* ✅ Redirect to Login Page if user already has an account */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-green-500 font-medium hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
