import React, { useState, useEffect } from "react";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

const images = [slider1, slider2, slider3];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          position: "absolute",
          transition: "opacity 1s ease-in-out",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Blog</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Discover, share, and explore amazing content from passionate writers.
        </p>
      </div>
    </div>
  );
};

export default HeroSlider;
