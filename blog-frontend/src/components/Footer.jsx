// import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-8">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
//           {/* 🔹 About Section */}
//           <div>
//             <h3 className="text-xl font-bold mb-3">About Us</h3>
//             <p className="text-gray-400">
//               Welcome to our Blog App! Discover insightful articles, explore trending topics, and connect with like-minded people.
//             </p>
//           </div>

//           {/* 🔹 Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-3">Quick Links</h3>
//             <ul>
//               <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
//               <li><a href="/dashboard" className="text-gray-400 hover:text-white transition">Dashboard</a></li>
//               <li><a href="/create" className="text-gray-400 hover:text-white transition">Create Post</a></li>
//               <li><a href="/about" className="text-gray-400 hover:text-white transition">About</a></li>
//             </ul>
//           </div>

//           {/* 🔹 Social Media */}
//           <div>
//             <h3 className="text-xl font-bold mb-3">Follow Us</h3>
//             <div className="flex justify-center md:justify-start space-x-4">
//               <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl transition"><FaFacebook /></a>
//               <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl transition"><FaTwitter /></a>
//               <a href="#" className="text-gray-400 hover:text-pink-500 text-2xl transition"><FaInstagram /></a>
//               <a href="#" className="text-gray-400 hover:text-blue-700 text-2xl transition"><FaLinkedin /></a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="text-center text-gray-500 mt-8">
//           <p>© {new Date().getFullYear()} Blog App. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          
          {/* 🔹 About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">About Us</h3>
            <p className="text-gray-400">
              Welcome to our Blog App! Discover insightful articles, explore trending topics, and connect with like-minded people.
            </p>
          </div>

          {/* 🔹 Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Dashboard", "Create Post", "About"].map((link, index) => (
                <li key={index}>
                  <a
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-yellow-400 transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get the latest blog updates!</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 text-gray-900 rounded-full focus:outline-none"
              />
              <button className="absolute right-2 top-2 bg-yellow-400 px-4 py-2 rounded-full text-black font-semibold hover:bg-yellow-500 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* 🔹 Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 text-3xl transition"><FaFacebook /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-3xl transition"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-pink-500 text-3xl transition"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-blue-700 text-3xl transition"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 mt-12 border-t border-gray-700 pt-6">
          <p>© {new Date().getFullYear()} Blog App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
