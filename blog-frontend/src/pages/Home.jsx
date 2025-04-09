
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
