// import React from "react";

// const blogPosts = [
//   {
//     title: "How to Start a Blog in 2024",
//     excerpt: "A step-by-step guide to launching your own successful blog.",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     // image: "https://source.unsplash.com/400x300/?blog,writing",
//   },
//   {
//     title: "Top 10 Blogging Tips for Beginners",
//     excerpt: "Learn the secrets to writing engaging and viral blog posts.",
//     image: "https://source.unsplash.com/400x300/?laptop,notebook",
//   },
//   {
//     title: "Why Blogging is Still Relevant in 2024",
//     excerpt: "Explore why blogging continues to be a powerful tool for businesses and individuals.",
//     image: "https://source.unsplash.com/400x300/?books,reading",
//   },
// ];

// const BlogPosts = () => {
//   return (
//     <div className="py-16 bg-gray-100 text-center">
//       <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
//       <div className="flex flex-wrap justify-center gap-6">
//         {blogPosts.map((post, index) => (
//           <div key={index} className="bg-white p-4 shadow-lg rounded-lg max-w-sm">
//             <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-md mb-4" />
//             <h3 className="text-xl font-bold">{post.title}</h3>
//             <p className="text-gray-600">{post.excerpt}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogPosts;





import React from "react";
import blog1 from "../assets/5.jpg";
import blog2 from "../assets/6.jpg";
import blog3 from "../assets/7.jpg";

const blogPosts = [
  {
    title: "How to Start a Blog in 2024",
    excerpt: "A step-by-step guide to launching your own successful blog.",
    image: blog1,
  },
  {
    title: "Top 10 Blogging Tips for Beginners",
    excerpt: "Learn the secrets to writing engaging and viral blog posts.",
    image: blog2,
  },
  {
    title: "Why Blogging is Still Relevant in 2024",
    excerpt: "Explore why blogging continues to be a powerful tool for businesses and individuals.",
    image: blog3,
  },
];

const BlogPosts = () => {
  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-lg max-w-sm">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-40 object-cover rounded-md mb-4"
              onError={(e) => e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found"} 
            />
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
