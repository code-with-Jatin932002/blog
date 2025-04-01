// import React, { useState } from "react";
// import SignupForm from "./SignupForm";
// import LoginForm from "./LoginForm";

// const Home = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {/* Home Page Content */}
//       <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Blog</h1>
//       <p className="text-lg text-gray-600 mb-6">Discover, share, and explore amazing content.</p>

//       {/* Buttons to Show Forms */}
//       <div className="space-x-4">
//         <button
//           onClick={() => { setIsSignup(false); setShowForm(true); }}
//           className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
//         >
//           Login
//         </button>
//         <button
//           onClick={() => { setIsSignup(true); setShowForm(true); }}
//           className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
//         >
//           Sign Up
//         </button>
//       </div>

//       {/* Login / Signup Modal */}
//       {showForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-md w-96">
//             <button className="absolute top-2 right-4 text-xl" onClick={() => setShowForm(false)}>✖</button>
//             {isSignup ? <SignupForm /> : <LoginForm />}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;





// import React, { useState } from "react";
// import SignupForm from "./SignupForm";
// import LoginForm from "./LoginForm";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // ✅ Import Images from src/assets/
// import slider1 from "../assets/3.jpg";
// import slider2 from "../assets/4.jpg";
// import slider3 from "../assets/5.jpg";

// const Home = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   // 🔹 Image Slider Settings
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 2000, // Transition speed
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000, // Change image every 3 seconds
//     fade: true, // Smooth fade transition
//     cssEase: "linear",
//   };

//   // 🔹 Images Array
//   const images = [slider1, slider2, slider3];

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* 🔹 Background Image Slider */}
//       <div className="absolute top-0 left-0 w-full h-full -z-10">
//         <Slider {...settings}>
//           {images.map((img, index) => (
//             <div key={index} className="relative w-full h-screen">
//               <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
//               {/* Overlay for better readability */}
//               <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* 🔹 Home Page Content */}
//       <div className="flex flex-col items-center justify-center h-screen text-white text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Blog</h1>
//         <p className="text-lg md:text-xl mb-6 max-w-2xl">
//           Discover, share, and explore amazing content from passionate writers.
//         </p>

//         {/* 🔹 Buttons for Login/Signup */}
//         <div className="flex space-x-4">
//           <button
//             onClick={() => { setIsSignup(false); setShowForm(true); }}
//             className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
//           >
//             Login
//           </button>
//           <button
//             onClick={() => { setIsSignup(true); setShowForm(true); }}
//             className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
//           >
//             Sign Up
//           </button>
//         </div>
//       </div>

//       {/* 🔹 Login / Signup Modal */}
//       {showForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-md w-96 relative">
//             <button className="absolute top-2 right-4 text-xl" onClick={() => setShowForm(false)}>✖</button>
//             {isSignup ? <SignupForm /> : <LoginForm />}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;






// import React, { useState } from "react";
// import SignupForm from "./SignupForm";
// import LoginForm from "./LoginForm";
// import slider1 from "../assets/slider1.jpg";
// import slider2 from "../assets/slider2.jpg";
// import slider3 from "../assets/slider3.jpg";

// const Home = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div className="w-full">
//       {/* 🔹 Hero Section */}
//       <div className="relative w-full h-screen">
//         <img src={slider1} alt="Hero Image" className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-6">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Blog</h1>
//           <p className="text-lg md:text-xl mb-6 max-w-2xl">
//             Discover, share, and explore amazing content from passionate writers.
//           </p>

//           {/* 🔹 Buttons for Login/Signup */}
//           <div className="flex space-x-4">
//             <button
//               onClick={() => { setIsSignup(false); setShowForm(true); }}
//               className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
//             >
//               Login
//             </button>
//             <button
//               onClick={() => { setIsSignup(true); setShowForm(true); }}
//               className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Section 1: Image on Left, Content on Right */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gray-100">
//         <img src={slider2} alt="Feature 1" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md" />
//         <div className="md:w-1/2 text-left md:pl-10 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold mb-3">Explore New Ideas</h2>
//           <p className="text-lg text-gray-600">
//             Our platform helps you find trending blogs, latest news, and engaging articles. Stay updated with the world of knowledge.
//           </p>
//         </div>
//       </div>

//       {/* 🔹 Section 2: Image on Right, Content on Left */}
//       <div className="flex flex-col md:flex-row-reverse items-center justify-between px-6 py-16">
//         <img src={slider3} alt="Feature 2" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md" />
//         <div className="md:w-1/2 text-left md:pr-10 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold mb-3">Join Our Blogging Community</h2>
//           <p className="text-lg text-gray-600">
//             Connect with other writers and readers, share your experiences, and start building your blogging journey today.
//           </p>
//         </div>
//       </div>

//       {/* 🔹 Login / Signup Modal */}
//       {showForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-md w-96 relative">
//             <button className="absolute top-2 right-4 text-xl" onClick={() => setShowForm(false)}>✖</button>
//             {isSignup ? <SignupForm /> : <LoginForm />}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;





// import React, { useState } from "react";
// import SignupForm from "./SignupForm";
// import LoginForm from "./LoginForm";
// import Brands from "../components/Brands";
// import Testimonials from "../components/Testimonials";
// import BlogPosts from "../components/BlogPosts";

// // ✅ Import Images
// import slider1 from "../assets/slider1.jpg";
// import slider2 from "../assets/slider2.jpg";
// import slider3 from "../assets/slider3.jpg";

// const Home = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div className="w-full">
//       {/* 🔹 Hero Section */}
//       <div className="relative w-full h-screen">
//         <img src={slider1} alt="Hero Image" className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-6">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Blog</h1>
//           <p className="text-lg md:text-xl mb-6 max-w-2xl">
//             Discover, share, and explore amazing content from passionate writers.
//           </p>

//           {/* 🔹 Buttons for Login/Signup */}
//           <div className="flex space-x-4">
//             <button
//               onClick={() => { setIsSignup(false); setShowForm(true); }}
//               className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
//             >
//               Login
//             </button>
//             <button
//               onClick={() => { setIsSignup(true); setShowForm(true); }}
//               className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
//             >
//               Sign Up
//             </button>
//           </div>


//         </div>
//       </div>

//       {/* 🔹 Section 1: Image on Left, Content on Right */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gray-100">
//         <img src={slider2} alt="Feature 1" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md" />
//         <div className="md:w-1/2 text-left md:pl-10 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold mb-3">Explore New Ideas</h2>
//           <p className="text-lg text-gray-600">
//             Our platform helps you find trending blogs, latest news, and engaging articles. Stay updated with the world of knowledge.
//           </p>
//         </div>
//       </div>

//       {/* 🔹 Section 2: Image on Right, Content on Left */}
//       <div className="flex flex-col md:flex-row-reverse items-center justify-between px-6 py-16">
//         <img src={slider3} alt="Feature 2" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md" />
//         <div className="md:w-1/2 text-left md:pr-10 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold mb-3">Join Our Blogging Community</h2>
//           <p className="text-lg text-gray-600">
//             Connect with other writers and readers, share your experiences, and start building your blogging journey today.
//           </p>
//         </div>
//       </div>

//       {/* 🔹 New Sections */}
      
//       <Testimonials />   {/* ✅ User Testimonials */}
//       <Brands />         {/* ✅ Partner Brands */}
//       <BlogPosts />      {/* ✅ Latest Blog Posts */}

//       {/* 🔹 Login / Signup Modal */}
//       {showForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-md w-96 relative">
//             <button className="absolute top-2 right-4 text-xl" onClick={() => setShowForm(false)}>✖</button>
//             {isSignup ? <SignupForm /> : <LoginForm />}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;




// import React from "react";
// import Brands from "../components/Brands";
// import Testimonials from "../components/Testimonials";
// import BlogPosts from "../components/BlogPosts";

// // ✅ Import Images
// import slider1 from "../assets/slider1.jpg";
// import slider2 from "../assets/slider2.jpg";
// import slider3 from "../assets/slider3.jpg";

// const Home = () => {
//   return (
//     <div className="w-full">
//       {/* 🔹 Hero Section */}
//       <div className="relative w-full h-screen">
//         <img src={slider1} alt="Hero Image" className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-6">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Blog</h1>
//           <p className="text-lg md:text-xl mb-6 max-w-2xl">
//             Discover, share, and explore amazing content from passionate writers.
//           </p>
//         </div>
//       </div>

//       {/* 🔹 Section 1: Image on Left, Content on Right */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gray-100">
//         <img src={slider2} alt="Feature 1" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md" />
//         <div className="md:w-1/2 text-left md:pl-10 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold mb-3">Explore New Ideas</h2>
//           <p className="text-lg text-gray-600">
//             Our platform helps you find trending blogs, latest news, and engaging articles. Stay updated with the world of knowledge.
//           </p>
//         </div>
//       </div>

//       {/* 🔹 Section 2: Image on Right, Content on Left */}
//       <div className="flex flex-col md:flex-row-reverse items-center justify-between px-6 py-16">
//         <img src={slider3} alt="Feature 2" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md" />
//         <div className="md:w-1/2 text-left md:pr-10 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold mb-3">Join Our Blogging Community</h2>
//           <p className="text-lg text-gray-600">
//             Connect with other writers and readers, share your experiences, and start building your blogging journey today.
//           </p>
//         </div>
//       </div>

//       {/* 🔹 New Sections */}
//       <Testimonials />   {/* ✅ User Testimonials */}
//       <Brands />         {/* ✅ Partner Brands */}
//       <BlogPosts />      {/* ✅ Latest Blog Posts */}
//     </div>
//   );
// };

// export default Home;





// import React from "react";
// import Slider from "react-slick"; // ✅ Import react-slick
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Brands from "../components/Brands";
// import Testimonials from "../components/Testimonials";
// import BlogPosts from "../components/BlogPosts";

// // ✅ Import Images
// import slider1 from "../assets/4.jpg";
// import slider2 from "../assets/5.jpg";
// import slider3 from "../assets/6.jpg";

// const Home = () => {
//   const settings = {
//     dots: false,          // Hide dots
//     infinite: true,       // Infinite loop
//     speed: 1000,         // Transition speed
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,       // ✅ Enable auto-slide
//     autoplaySpeed: 3000,  // ✅ Set slide change interval (3 seconds)
//     fade: true,          // ✅ Smooth fade transition
//     arrows: false,       // Hide navigation arrows
//   };

//   return (
//     <div className="w-full">
//       {/* 🔹 Hero Section with Background Slider */}
//       <div className="relative w-full h-screen overflow-hidden">
//         <Slider {...settings} className="w-full h-full">
//           <div>
//             <img src={slider1} alt="Slide 1" className="w-full h-screen object-cover" />
//           </div>
//           <div>
//             <img src={slider2} alt="Slide 2" className="w-full h-screen object-cover" />
//           </div>
//           <div>
//             <img src={slider3} alt="Slide 3" className="w-full h-screen object-cover" />
//           </div>
//         </Slider>

//         {/* ✅ Overlay Content */}
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-6">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Blog</h1>
//           <p className="text-lg md:text-xl mb-6 max-w-2xl">
//             Discover, share, and explore amazing content from passionate writers.
//           </p>
//         </div>
//       </div>

//       {/* 🔹 Other Sections */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gray-100">
//         <img src={slider2} alt="Feature 1" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md" />
//         <div className="md:w-1/2 text-left md:pl-10 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold mb-3">Explore New Ideas</h2>
//           <p className="text-lg text-gray-600">
//             Our platform helps you find trending blogs, latest news, and engaging articles. Stay updated with the world of knowledge.
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row-reverse items-center justify-between px-6 py-16">
//         <img src={slider3} alt="Feature 2" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md" />
//         <div className="md:w-1/2 text-left md:pr-10 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold mb-3">Join Our Blogging Community</h2>
//           <p className="text-lg text-gray-600">
//             Connect with other writers and readers, share your experiences, and start building your blogging journey today.
//           </p>
//         </div>
//       </div>

//       {/* 🔹 New Sections */}
//       <Testimonials />   {/* ✅ User Testimonials */}
//       <Brands />         {/* ✅ Partner Brands */}
//       <BlogPosts />      {/* ✅ Latest Blog Posts */}
//     </div>
//   );
// };

// export default Home;





// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Brands from "../components/Brands";
// import Testimonials from "../components/Testimonials";
// import BlogPosts from "../components/BlogPosts";

// // ✅ Import Images
// import slider1 from "../assets/4.jpg";
// import slider2 from "../assets/5.jpg";
// import slider3 from "../assets/6.jpg";

// const Home = () => {
//   const settings = {
//     dots: true,            // ✅ Enable dots for navigation
//     infinite: true,        // ✅ Loop slider
//     speed: 1000,          // ✅ Smooth transition speed
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,        // ✅ Enable auto-slide
//     autoplaySpeed: 3000,   // ✅ Set interval (3 seconds)
//     fade: true,           // ✅ Smooth fade transition
//     arrows: false,        // ✅ Hide arrows for a clean look
//   };

//   return (
//     <div className="w-full">
//       {/* 🔹 Hero Section with Background Slider */}
//       <div className="relative w-full h-screen overflow-hidden bg-gray-900"> {/* 🔹 Added Default BG */}
//         <Slider {...settings} className="w-full h-full">
//           <div>
//             <img src={slider1} alt="Slide 1" className="w-full h-screen object-cover" />
//           </div>
//           <div>
//             <img src={slider2} alt="Slide 2" className="w-full h-screen object-cover" />
//           </div>
//           <div>
//             <img src={slider3} alt="Slide 3" className="w-full h-screen object-cover" />
//           </div>
//         </Slider>

//         {/* ✅ Overlay Content */}
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-6">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Welcome to Our Blog</h1>
//           <p className="text-lg md:text-xl mb-6 max-w-2xl opacity-90">
//             Discover, share, and explore amazing content from passionate writers.
//           </p>
//           <a href="#explore" className="bg-blue-500 hover:bg-blue-700 transition px-6 py-3 rounded-full text-lg font-semibold">
//             Explore Blogs
//           </a>

//           {/* 🔹 Scroll Down Animation */}
//           <div className="absolute bottom-6 flex justify-center">
//             <div className="animate-bounce text-white text-2xl">↓</div>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Features Section */}
//       <div id="explore" className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gray-100">
//         <img src={slider2} alt="Feature 1" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform hover:scale-105" />
//         <div className="md:w-1/2 text-left md:pl-10 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold mb-3">Explore New Ideas</h2>
//           <p className="text-lg text-gray-600">
//             Our platform helps you find trending blogs, latest news, and engaging articles. Stay updated with the world of knowledge.
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row-reverse items-center justify-between px-6 py-16">
//         <img src={slider3} alt="Feature 2" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform hover:scale-105" />
//         <div className="md:w-1/2 text-left md:pr-10 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold mb-3">Join Our Blogging Community</h2>
//           <p className="text-lg text-gray-600">
//             Connect with other writers and readers, share your experiences, and start building your blogging journey today.
//           </p>
//         </div>
//       </div>

//       {/* 🔹 New Sections */}
//       <Testimonials />   {/* ✅ User Testimonials */}
//       <Brands />         {/* ✅ Partner Brands */}
//       <BlogPosts />      {/* ✅ Latest Blog Posts */}
//     </div>
//   );
// };

// export default Home;





// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Brands from "../components/Brands";
// import Testimonials from "../components/Testimonials";
// import BlogPosts from "../components/BlogPosts";

// // ✅ Import Images
// import slider1 from "../assets/23.jpg";
// import slider2 from "../assets/3.jpg";
// import slider3 from "../assets/4.jpg";

// const Home = () => {
//   console.log(slider1, slider2, slider3);  // ✅ Debugging images

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     fade: true,
//     arrows: false,
//   };

//   return (
//     <div className="w-full">
//       {/* ✅ Removed bg-gray-900 to fix black background issue */}
//       <div className="relative w-full h-screen overflow-hidden"> 


//         <Slider {...settings} className="w-full h-full">
//           <div>
//             <img src={slider1} alt="Slide 1" className="w-full h-screen object-cover" />
//           </div>
//           <div>
//             <img src={slider2} alt="Slide 2" className="w-full h-screen object-cover" />
//           </div>
//           <div>
//             <img src={slider3} alt="Slide 3" className="w-full h-screen object-cover" />
//           </div>
//         </Slider>


//         {/* ✅ Reduced opacity to bg-opacity-30 for better visibility */}
//         <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white text-center px-6">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Welcome to Our Blog</h1>
//           <p className="text-lg md:text-xl mb-6 max-w-2xl opacity-90">
//             Discover, share, and explore amazing content from passionate writers.
//           </p>
//           <a href="#explore" className="bg-blue-500 hover:bg-blue-700 transition px-6 py-3 rounded-full text-lg font-semibold">
//             Explore Blogs
//           </a>

//           {/* 🔹 Scroll Down Animation */}
//           <div className="absolute bottom-6 flex justify-center">
//             <div className="animate-bounce text-white text-2xl">↓</div>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Features Section */}
//       <div id="explore" className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gray-100">
//         <img src={slider2} alt="Feature 1" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform hover:scale-105" />
//         <div className="md:w-1/2 text-left md:pl-10 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold mb-3">Explore New Ideas</h2>
//           <p className="text-lg text-gray-600">
//             Our platform helps you find trending blogs, latest news, and engaging articles. Stay updated with the world of knowledge.
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row-reverse items-center justify-between px-6 py-16">
//         <img src={slider3} alt="Feature 2" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform hover:scale-105" />
//         <div className="md:w-1/2 text-left md:pr-10 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold mb-3">Join Our Blogging Community</h2>
//           <p className="text-lg text-gray-600">
//             Connect with other writers and readers, share your experiences, and start building your blogging journey today.
//           </p>
//         </div>
//       </div>

//       {/* 🔹 New Sections */}
//       <Testimonials />  
//       <Brands />        
//       <BlogPosts />      
//     </div>
//   );
// };

// export default Home;






// import React from "react";
// import Brands from "../components/Brands";
// import Testimonials from "../components/Testimonials";
// import BlogPosts from "../components/BlogPosts";

// // ✅ Import Image
// import bannerImage from "../assets/23.jpg"; 

// const Home = () => {
//   return (
//     <div className="w-full relative">
//       {/* ✅ Hero Section with Background Image */}
//       <div 
//         className="relative w-full h-screen flex items-center justify-center text-white text-center px-6"
//         style={{
//           backgroundImage: `url(${bannerImage})`, 
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           position: "relative"
//         }}
//       >
//         {/* ✅ Black Overlay */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>

//         {/* ✅ Content (Placed Above) */}
//         <div className="relative z-10">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Welcome to Our Blog
//           </h1>
//           <p className="text-lg md:text-xl mb-6 max-w-2xl">
//             Discover, share, and explore amazing content from passionate writers.
//           </p>
//           <a href="#explore" className="bg-blue-500 hover:bg-blue-700 transition px-6 py-3 rounded-full text-lg font-semibold">
//             Explore Blogs
//           </a>
//         </div>
//       </div>

//       {/* Other Sections */}
//       <Testimonials />  
//       <Brands />        
//       <BlogPosts />      
//     </div>
//   );
// };

// export default Home;




// import React from "react";
// import Brands from "../components/Brands";
// import Testimonials from "../components/Testimonials";
// import BlogPosts from "../components/BlogPosts";

// // ✅ Import Images
// import bannerImage from "../assets/45.jpg"; 
// import slider2 from "../assets/3.jpg"; 
// import slider3 from "../assets/4.jpg"; 

// const Home = () => {
//   return (
//     <div className="w-full relative">
//       {/* ✅ Hero Section with Background Image */}
//       <div 
//         className="relative w-full h-screen flex items-center justify-center text-white text-center px-6"
//         style={{
//           backgroundImage: `url(${bannerImage})`, 
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           position: "relative"
//         }}
//       >
//         {/* ✅ Black Overlay */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>

//         {/* ✅ Content (Placed Above) */}
//         <div className="relative z-10">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Welcome to Our Blog
//           </h1>
//           <p className="text-lg md:text-xl mb-6 max-w-2xl">
//             Discover, share, and explore amazing content from passionate writers.
//           </p>
//           <a href="#explore" className="bg-blue-500 hover:bg-blue-700 transition px-6 py-3 rounded-full text-lg font-semibold">
//             Explore Blogs
//           </a>
//         </div>
//       </div>

//       {/* ✅ Feature Section 1: Explore New Ideas */}
//       <div id="explore" className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gray-100">
//         <img src={slider2} alt="Feature 1" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform hover:scale-105" />
//         <div className="md:w-1/2 text-left md:pl-10 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold mb-3">Explore New Ideas</h2>
//           <p className="text-lg text-gray-600">
//             Our platform helps you find trending blogs, latest news, and engaging articles. Stay updated with the world of knowledge.
//           </p>
//         </div>
//       </div>

//       {/* ✅ Feature Section 2: Join Our Blogging Community */}
//       <div className="flex flex-col md:flex-row-reverse items-center justify-between px-6 py-16">
//         <img src={slider3} alt="Feature 2" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform hover:scale-105" />
//         <div className="md:w-1/2 text-left md:pr-10 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold mb-3">Join Our Blogging Community</h2>
//           <p className="text-lg text-gray-600">
//             Connect with other writers and readers, share your experiences, and start building your blogging journey today.
//           </p>
//         </div>
//       </div>

//       {/* Other Sections */}
//       <Testimonials />  
//       <Brands />        
//       <BlogPosts />      
//     </div>
//   );
// };

// export default Home;






import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Brands from "../components/Brands";
import Testimonials from "../components/Testimonials";
import BlogPosts from "../components/BlogPosts";
import Dashboard from "../pages/Dashboard";

// ✅ Import Images
import banner1 from "../assets/45.jpg"; 
import banner2 from "../assets/3.jpg"; 
import banner3 from "../assets/4.jpg"; 

import banner4 from "../assets/23.jpg"; 
import banner5 from "../assets/71.jpg"; 
import banner6 from "../assets/07.jpg"; 


const Home = () => {
  return (
    <div className="w-full relative">
      {/* ✅ Hero Section with Background Image Slider */}
      <div className="relative w-full h-screen">
        {/* ✅ Swiper Slider */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="absolute inset-0 w-full h-full"
        >
          <SwiperSlide>
            <img src={banner1} alt="Slide 1" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner4} alt="Slide 2" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner5} alt="Slide 3" className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>

        {/* ✅ Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* ✅ Content (Placed Above the Slider) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Our Blog
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Discover, share, and explore amazing content from passionate writers.
          </p>
          <a href="#explore" className="bg-gray-900 hover:bg-blue-700 transition px-6 py-3 rounded-full text-lg font-semibold">
            Explore Blogs
          </a>
        </div>
      </div>

      {/* ✅ Feature Section 1: Explore New Ideas */}
      <div id="explore" className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gray-100">
        <img src={banner2} alt="Feature 1" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform hover:scale-105" />
        <div className="md:w-1/2 text-left md:pl-10 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold mb-3">Explore New Ideas</h2>
          <p className="text-lg text-gray-600">
            Our platform helps you find trending blogs, latest news, and engaging articles. Stay updated with the world of knowledge.
          </p>
        </div>
      </div>

      {/* ✅ Feature Section 2: Join Our Blogging Community */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between px-6 py-16">
        <img src={banner3} alt="Feature 2" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform hover:scale-105" />
        <div className="md:w-1/2 text-left md:pr-10 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold mb-3">Join Our Blogging Community</h2>
          <p className="text-lg text-gray-600">
            Connect with other writers and readers, share your experiences, and start building your blogging journey today.
          </p>
        </div>
      </div>

      {/* Other Sections */}
      <Testimonials />  
      <Brands />        
      <BlogPosts />  
      <Dashboard/>    
    </div>
  );
};

export default Home;
