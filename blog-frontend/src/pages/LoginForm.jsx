// import React, { useState } from "react";

// const LoginForm = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Data:", formData);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-2">
//         <input type="email" name="email" placeholder="Email" className="p-2 border w-full" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" className="p-2 border w-full" onChange={handleChange} required />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full hover:bg-blue-600 transition">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;



// import React, { useState } from "react";
// import axios from "axios";

// const LoginForm = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", formData);
//       localStorage.setItem("token", res.data.token); // Save token
//       console.log("Login Successful:", res.data);
//     } catch (error) {
//       console.error("Login Error:", error.response.data);
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-2">
//         <input type="email" name="email" placeholder="Email" className="p-2 border w-full" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" className="p-2 border w-full" onChange={handleChange} required />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full hover:bg-blue-600 transition">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;





// import React, { useState } from "react";
// import axios from "axios";

// const LoginForm = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5001/api/auth/login", formData);
//       localStorage.setItem("token", res.data.token); // ✅ Save token for authentication
//       alert("Login Successful!");
//     } catch (error) {
//       alert(error.response?.data?.message || "Login failed. Try again.");
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-2">
//         <input type="email" name="email" placeholder="Email" className="p-2 border w-full" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" className="p-2 border w-full" onChange={handleChange} required />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full hover:bg-blue-600 transition">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;






// import React, { useState } from "react";
// import axios from "axios";

// const LoginForm = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [popup, setPopup] = useState({ show: false, message: "", type: "" }); // ✅ Popup state

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5001/api/auth/login", formData);
//       localStorage.setItem("token", res.data.token);
      
//       // ✅ Show success popup
//       setPopup({ show: true, message: "✅ User Successfully Logged In!", type: "success" });
//       setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000); // ✅ Hide after 3 sec
//     } catch (error) {
//       // ❌ Show error popup
//       setPopup({
//         show: true,
//         message: "❌ Login Failed: Invalid Credentials",
//         type: "error",
//       });
//       setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000); // ✅ Hide after 3 sec
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

//       {/* ✅ Success/Error Popup */}
//       {popup.show && (
//         <div
//           className={`fixed top-5 right-5 px-4 py-2 rounded shadow-md ${
//             popup.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
//           }`}
//         >
//           {popup.message}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-2">
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           className="p-2 border w-full"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           className="p-2 border w-full "
//           onChange={handleChange}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 w-full hover:bg-blue-600 transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;





// import React, { useState } from "react";
// import axios from "axios";

// const LoginForm = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [popup, setPopup] = useState({ show: false, message: "", type: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5001/api/auth/login", formData);
//       localStorage.setItem("token", res.data.token);
      
//       setPopup({ show: true, message: "✅ User Successfully Logged In!", type: "success" });
//       setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
//     } catch (error) {
//       setPopup({
//         show: true,
//         message: "❌ Login Failed: Invalid Credentials",
//         type: "error",
//       });
//       setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

//         {/* ✅ Success/Error Popup */}
//         {popup.show && (
//           <div
//             className={`fixed top-5 right-5 px-4 py-2 rounded shadow-md ${
//               popup.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
//             }`}
//           >
//             {popup.message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex flex-col">
//             <label className="text-gray-600 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-gray-600 font-medium">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-600 transition transform hover:scale-105"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-4">
//           Don't have an account? <a href="#" className="text-blue-500 font-medium hover:underline">Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;







// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [popup, setPopup] = useState({ show: false, message: "", type: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5001/api/auth/login", formData);
//       setPopup({ show: true, message: "✅ Login Successful!", type: "success" });
//       setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
//     } catch (error) {
//       setPopup({
//         show: true,
//         message: "❌ Login Failed: " + (error.response?.data?.message || "Please try again."),
//         type: "error",
//       });
//       setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

//         {popup.show && (
//           <div className={`fixed top-5 right-5 px-4 py-2 rounded shadow-md ${popup.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
//             {popup.message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="email" name="email" placeholder="Email" className="p-3 border rounded-lg w-full" onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" className="p-3 border rounded-lg w-full" onChange={handleChange} required />

//           <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-lg w-full hover:bg-green-600 transition">
//             Login
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-4">
//           Don't have an account? <Link to="/signup" className="text-green-500 font-medium hover:underline">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;







import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Import useNavigate for redirection
import axios from "axios";
import { useAuth } from "../context/AuthContext"; // ✅ Import authentication context

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [popup, setPopup] = useState({ show: false, message: "", type: "" });
  const navigate = useNavigate(); // ✅ Hook for navigation
  const { login } = useAuth(); // ✅ Access login function from AuthContext

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/auth/login", formData);
      login(response.data.user); // ✅ Save user in context
      console.log(response)
      localStorage.setItem(
        "token",response.data.token
      )
      setPopup({ show: true, message: "✅ Login Successful!", type: "success" });
      

      setTimeout(() => {
        setPopup({ show: false, message: "", type: "" });
        navigate("/inside" , { replace: true } ); // ✅ Redirect to inside page
      }, 1000);
    } catch (error) {
      setPopup({
        show: true,
        message: "❌ Login Failed: " + (error.response?.data?.message || "Please try again."),
        type: "error",
      });
      setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {popup.show && (
          <div className={`fixed top-5 right-5 px-4 py-2 rounded shadow-md ${popup.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
            {popup.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" name="email" placeholder="Email" className="p-3 border rounded-lg w-full" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="p-3 border rounded-lg w-full" onChange={handleChange} required />

          <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-lg w-full hover:bg-green-600 transition">
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <Link to="/signup" className="text-green-500 font-medium hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;







