// import React, { useState } from "react";

// const SignupForm = () => {
//   const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", mobile: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Signup Data:", formData);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
//       <form onSubmit={handleSubmit} className="space-y-2">
//         <input type="text" name="firstName" placeholder="First Name" className="p-2 border w-full" onChange={handleChange} required />
//         <input type="text" name="lastName" placeholder="Last Name" className="p-2 border w-full" onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" className="p-2 border w-full" onChange={handleChange} required />
//         <input type="tel" name="mobile" placeholder="Mobile" className="p-2 border w-full" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" className="p-2 border w-full" onChange={handleChange} required />
//         <button type="submit" className="bg-green-500 text-white px-4 py-2 w-full hover:bg-green-600 transition">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;




// import React, { useState } from "react";
// import axios from "axios";

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     password: "",
//   });

//   const [message, setMessage] = useState(""); // ✅ For success/error messages

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
//       setMessage("Signup successful! You can now log in.");
//       localStorage.setItem("token", res.data.token); // ✅ Save token after signup
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Signup failed. Try again.");
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
//       {message && <p className="text-center text-red-500">{message}</p>}
//       <form onSubmit={handleSubmit} className="space-y-2">
//         <input type="text" name="firstName" placeholder="First Name" className="p-2 border w-full" onChange={handleChange} required />
//         <input type="text" name="lastName" placeholder="Last Name" className="p-2 border w-full" onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" className="p-2 border w-full" onChange={handleChange} required />
//         <input type="tel" name="mobile" placeholder="Mobile" className="p-2 border w-full" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" className="p-2 border w-full" onChange={handleChange} required />
//         <button type="submit" className="bg-green-500 text-white px-4 py-2 w-full hover:bg-green-600 transition">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;




// import React, { useState } from "react";
// import axios from "axios";

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5001/api/auth/signup", formData);
//       alert("Signup Successful! You can now log in.");
//     } catch (error) {
//       alert(error.response?.data?.message || "Signup failed. Try again.");
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
//       <form onSubmit={handleSubmit} className="space-y-2">
//         <input type="text" name="firstName" placeholder="First Name" className="p-2 border w-full" onChange={handleChange} required />
//         <input type="text" name="lastName" placeholder="Last Name" className="p-2 border w-full" onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" className="p-2 border w-full" onChange={handleChange} required />
//         <input type="tel" name="mobile" placeholder="Mobile" className="p-2 border w-full" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" className="p-2 border w-full" onChange={handleChange} required />
//         <button type="submit" className="bg-green-500 text-white px-4 py-2 w-full hover:bg-green-600 transition">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;








// import React, { useState } from "react";
// import axios from "axios";

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     password: "",
//   });

//   const [popup, setPopup] = useState({ show: false, message: "", type: "" }); // ✅ Popup state

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5001/api/auth/signup", formData);

//       // ✅ Show success popup
//       setPopup({ show: true, message: "✅ Signup Successful! You can now log in.", type: "success" });
//       setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000); // ✅ Hide after 3 sec
//     } catch (error) {
//       // ❌ Show error popup
//       setPopup({
//         show: true,
//         message: "❌ Signup Failed: " + (error.response?.data?.message || "Please try again."),
//         type: "error",
//       });
//       setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000); // ✅ Hide after 3 sec
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

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
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           className="p-2 border w-full"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           className="p-2 border w-full"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           className="p-2 border w-full"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="tel"
//           name="mobile"
//           placeholder="Mobile"
//           className="p-2 border w-full"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           className="p-2 border w-full"
//           onChange={handleChange}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-green-500 text-white px-4 py-2 w-full hover:bg-green-600 transition"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;





// import React, { useState } from "react";
// import axios from "axios";

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     password: "",
//   });

//   const [popup, setPopup] = useState({ show: false, message: "", type: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5001/api/auth/signup", formData);

//       setPopup({ show: true, message: "✅ Signup Successful! You can now log in.", type: "success" });
//       setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
//     } catch (error) {
//       setPopup({
//         show: true,
//         message: "❌ Signup Failed: " + (error.response?.data?.message || "Please try again."),
//         type: "error",
//       });
//       setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

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
//             <label className="text-gray-600 font-medium">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="Enter your first name"
//               className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-gray-600 font-medium">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Enter your last name"
//               className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-gray-600 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-gray-600 font-medium">Mobile</label>
//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Enter your mobile number"
//               className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
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
//               className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-green-500 text-white px-6 py-3 rounded-lg w-full hover:bg-green-600 transition transform hover:scale-105"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-4">
//           Already have an account? <a href="#" className="text-green-500 font-medium hover:underline">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;






// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     password: "",
//   });

//   const [popup, setPopup] = useState({ show: false, message: "", type: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5001/api/auth/signup", formData);
//       setPopup({ show: true, message: "✅ Signup Successful!", type: "success" });
//       setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
//     } catch (error) {
//       setPopup({
//         show: true,
//         message: "❌ Signup Failed: " + (error.response?.data?.message || "Please try again."),
//         type: "error",
//       });
//       setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

//         {popup.show && (
//           <div className={`fixed top-5 right-5 px-4 py-2 rounded shadow-md ${popup.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
//             {popup.message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="text" name="firstName" placeholder="First Name" className="p-3 border rounded-lg w-full" onChange={handleChange} required />
//           <input type="text" name="lastName" placeholder="Last Name" className="p-3 border rounded-lg w-full" onChange={handleChange} required />
//           <input type="email" name="email" placeholder="Email" className="p-3 border rounded-lg w-full" onChange={handleChange} required />
//           <input type="tel" name="mobile" placeholder="Mobile" className="p-3 border rounded-lg w-full" onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" className="p-3 border rounded-lg w-full" onChange={handleChange} required />

//           <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-lg w-full hover:bg-green-600 transition">
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-4">
//           Already have an account? <Link to="/login" className="text-green-500 font-medium hover:underline">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;





import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [popup, setPopup] = useState({ show: false, message: "", type: "" });
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/auth/signup", formData);
      setPopup({ show: true, message: "✅ Signup Successful!", type: "success" });

      setTimeout(() => {
        setPopup({ show: false, message: "", type: "" });
        setFormData({ firstName: "", lastName: "", email: "", mobile: "", password: "" }); // Clear form
        navigate("/"); // Redirect to home page
      }, 2000);
      
    } catch (error) {
      setPopup({
        show: true,
        message: "❌ Signup Failed: " + (error.response?.data?.message || "Please try again."),
        type: "error",
      });

      setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {popup.show && (
          <div className={`fixed top-5 right-5 px-4 py-2 rounded shadow-md ${popup.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
            {popup.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="firstName" placeholder="First Name" className="p-3 border rounded-lg w-full" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" className="p-3 border rounded-lg w-full" value={formData.lastName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="p-3 border rounded-lg w-full" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="mobile" placeholder="Mobile" className="p-3 border rounded-lg w-full" value={formData.mobile} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="p-3 border rounded-lg w-full" value={formData.password} onChange={handleChange} required />

          <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-lg w-full hover:bg-green-600 transition">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-green-500 font-medium hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
