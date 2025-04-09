import React from "react";

/**
 * Sample testimonials data array containing user feedback.
 * Each testimonial includes a name, review text, and profile image URL.
 */

const testimonials = [
  {
    name: "John Doe",
    review: "This blog has completely changed the way I read content. Love it!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Smith",
    review: "A great platform for sharing ideas and learning new things!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Johnson",
    review: "Highly recommended for bloggers and readers!",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

/**
 * Testimonials Component
 * Displays a list of user testimonials with profile pictures, names, and reviews.
 */

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-100 text-center">
       {/* Section Title */}
      <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>

       {/* Testimonials Wrapper */}
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
           // Each testimonial is displayed inside a styled card
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg max-w-sm text-center">

             {/* User Profile Image */}
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
            {/* User Review */}
            <p className="text-gray-700 italic">"{testimonial.review}"</p>
             {/* User Name */}
            <h4 className="font-bold mt-2">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
