// import React from "react";

// // ✅ Replace with your own brand logos
// const brandLogos = [
//   "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//   "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
//   "https://upload.wikimedia.org/wikipedia/commons/3/3f/Google_2015_logo.svg",
//   "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
// ];

// const Brands = () => {
//   return (
//     <div className="py-16 text-center">
//       <h2 className="text-3xl font-bold mb-8">Trusted by Leading Brands</h2>
//       <div className="flex justify-center gap-8 flex-wrap">
//         {brandLogos.map((logo, index) => (
//           <img key={index} src={logo} alt="Brand" className="h-12 md:h-16 object-contain" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Brands;





import React from "react";

// ✅ Use reliable brand logo links
const brandLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Fixed Google Logo
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
];

const Brands = () => {
  return (
    <div className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Trusted by Leading Brands</h2>
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
