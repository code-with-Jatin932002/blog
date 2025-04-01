import React from "react";

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

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg max-w-sm text-center">
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="text-gray-700 italic">"{testimonial.review}"</p>
            <h4 className="font-bold mt-2">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
