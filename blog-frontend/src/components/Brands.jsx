

import React from "react";

// ✅ Use reliable brand logo links
const brandLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",  // Amazon
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // Microsoft
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Fixed Google Logo
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", // Facebook
];

const Brands = () => {
  return (
    <div className="py-16 text-center">
      {/* ✅ Section Heading */}
      <h2 className="text-3xl font-bold mb-8">Trusted by Leading Brands</h2>

      {/* ✅ Displaying brand logos dynamically */}
      <div className="flex justify-center flex-wrap gap-6">
        {brandLogos.map((logo, index) => (
          <img 
            key={index} 
            src={logo} 
            alt="Brand Logo" 
            className="h-12 md:h-16 object-contain mx-4 md:mx-6"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
