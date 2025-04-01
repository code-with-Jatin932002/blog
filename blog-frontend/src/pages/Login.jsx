// import React from "react";
// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h2 className="text-2xl mb-4">Login</h2>
//       <button className="bg-red-500 text-white px-4 py-2 rounded">Login with Google</button>
//       <button className="bg-blue-700 text-white px-4 py-2 mt-2 rounded">Login with Facebook</button>
//     </div>
//   );
// };
// export default Login;



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaGoogle, FaFacebook } from "react-icons/fa";

// const Login = () => {
//   const navigate = useNavigate();

//   const handleGoogleLogin = () => {
//     window.open("http://localhost:5000/auth/google", "_self");
//   };

//   const handleFacebookLogin = () => {
//     window.open("http://localhost:5000/auth/facebook", "_self");
//   };

//   return (
//     <div className="flex flex-col items-center mt-20">
//       <h2 className="text-2xl mb-4">Login</h2>
//       <button className="bg-red-500 text-white px-6 py-2 mb-2 flex items-center" onClick={handleGoogleLogin}>
//         <FaGoogle className="mr-2" /> Login with Google
//       </button>
//       <button className="bg-blue-700 text-white px-6 py-2 flex items-center" onClick={handleFacebookLogin}>
//         <FaFacebook className="mr-2" /> Login with Facebook
//       </button>
//     </div>
//   );
// };

// export default Login;






import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  const handleGoogleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const handleFacebookLogin = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome Back</h2>
        <p className="text-gray-600 text-center mb-6">Login to continue</p>
        
        <button
          className="flex items-center justify-center bg-red-500 text-white px-4 py-2 w-full rounded-md mb-2 hover:bg-red-600 transition"
          onClick={handleGoogleLogin}
        >
          <FaGoogle className="mr-2" /> Login with Google
        </button>

        <button
          className="flex items-center justify-center bg-blue-700 text-white px-4 py-2 w-full rounded-md hover:bg-blue-800 transition"
          onClick={handleFacebookLogin}
        >
          <FaFacebook className="mr-2" /> Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;








