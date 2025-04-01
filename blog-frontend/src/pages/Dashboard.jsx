// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/posts").then((res) => setPosts(res.data));
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold">Your Posts</h2>
//       <Link to="/create-post" className="bg-green-500 text-white px-4 py-2 block w-32 my-4">
//         Create Post
//       </Link>
//       {posts.map((post) => (
//         <div key={post._id} className="border p-4 my-2">
//           <h3 className="text-lg font-bold">{post.title}</h3>
//           <Link to={`/post/${post._id}`} className="text-blue-500">Read More</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dashboard;






// import  React from "react";
// const Dashboard = () => {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl">Dashboard</h2>
//       <p>List of posts will be displayed here.</p>
//     </div>
//   );
// };
// export default Dashboard;





// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get("/api/posts")
//       .then(response => setPosts(response.data))
//       .catch(error => console.error("Error fetching posts:", error));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h2>
//         <p className="text-gray-600 mb-6">Welcome! Here are your recent posts.</p>
        
//         {posts.length === 0 ? (
//           <p className="text-gray-500">No posts available. <Link to="/create" className="text-blue-500">Create one</Link>.</p>
//         ) : (
//           <div className="grid gap-4">
//             {posts.map(post => (
//               <div key={post.id} className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition">
//                 <h3 className="text-xl font-semibold text-gray-700">{post.title}</h3>
//                 <p className="text-gray-600 mt-2">{post.content.substring(0, 100)}...</p>
//                 <Link to={`/post/${post.id}`} className="text-blue-500 mt-2 block">Read More</Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;








// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Simulating API call with dummy data
//   useEffect(() => {
//     setTimeout(() => {
//       setPosts([
//         {
//           _id: "1",
//           title: "Welcome to My Blog",
//           content: "This is the first post on our amazing blog platform!",
//         },
//         {
//           _id: "2",
//           title: "How to Learn React",
//           content: "React is a powerful JavaScript library for building UI...",
//         },
//         {
//           _id: "3",
//           title: "Why JavaScript is Awesome",
//           content: "JavaScript powers the web! Here's why it's the best...",
//         },
//       ]);
//       setLoading(false);
//     }, 1000); // Simulating a delay (1 second)
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h2>
//         <p className="text-gray-600 mb-6">Welcome! Here are some example posts.</p>

//         {posts.length === 0 ? (
//           <p className="text-gray-500">
//             No posts available. <Link to="/create" className="text-blue-500">Create one</Link>.
//           </p>
//         ) : (
//           <div className="grid gap-4">
//             {posts.map(post => (
//               <div key={post._id} className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition">
//                 <h3 className="text-xl font-semibold text-gray-700">{post.title}</h3>
//                 <p className="text-gray-600 mt-2">{post.content.substring(0, 100)}...</p>
//                 <Link to={`/post/${post._id}`} className="text-blue-500 mt-2 block">Read More</Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/posts").then(res => setPosts(res.data));
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl">Dashboard</h2>
//       {posts.length === 0 ? <p>No posts found.</p> : posts.map(post => (
//         <div key={post._id} className="p-4 bg-gray-100 mb-2">
//           <h3 className="text-lg font-bold">{post.title}</h3>
//           <p>{post.content.substring(0, 100)}...</p>
//           <Link to={`/post/${post._id}`} className="text-blue-500">Read More</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/posts", { withCredentials: true })  // ✅ Add `withCredentials` for authentication
//       .then(res => {
//         setPosts(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError("Error fetching posts. Please try again.");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl">Dashboard</h2>
//       {posts.length === 0 ? (
//         <p>No posts found. <Link to="/create" className="text-blue-500">Create a post</Link></p>
//       ) : (
//         posts.map(post => (
//           <div key={post._id} className="p-4 bg-gray-100 mb-2">
//             <h3 className="text-lg font-bold">{post.title}</h3>
//             <p>{post.content.substring(0, 100)}...</p>
//             <Link to={`/post/${post._id}`} className="text-blue-500">Read More</Link>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/posts", { withCredentials: true }) // ✅ Send credentials
//       .then(res => {
//         console.log("✅ Posts fetched:", res.data); // ✅ Debugging log
//         setPosts(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("❌ Error fetching posts:", err);
//         setError("Error fetching posts. Please try again.");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl">Dashboard</h2>
//       {posts.length === 0 ? (
//         <p>No posts found. <Link to="/create" className="text-blue-500">Create a post</Link></p>
//       ) : (
//         posts.map(post => (
//           <div key={post._id} className="p-4 bg-gray-100 mb-2">
//             <h3 className="text-lg font-bold">{post.title}</h3>
//             <p>{post.content.substring(0, 100)}...</p>
//             <Link to={`/post/${post._id}`} className="text-blue-500">Read More</Link>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Dashboard;








// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const token = localStorage.getItem("token"); // ✅ Get JWT token
//         const res = await axios.get("http://localhost:5001/api/posts", {
//           headers: { Authorization: `Bearer ${token}` }, // ✅ Include token
//         });

//         console.log("✅ Posts fetched:", res.data); // Debugging log
//         setPosts(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching posts:", err);
//         setError("Error fetching posts. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl">Dashboard</h2>
//       {posts.length === 0 ? (
//         <p>No posts found. <Link to="/create" className="text-blue-500">Create a post</Link></p>
//       ) : (
//         posts.map(post => (
//           <div key={post._id} className="p-4 bg-gray-100 mb-2">
//             <h3 className="text-lg font-bold">{post.title}</h3>
//             <p>{post.content.substring(0, 100)}...</p>
//             <Link to={`/post/${post._id}`} className="text-blue-500">Read More</Link>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Dashboard;





// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:5001/api/posts", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setPosts(res.data);
//       } catch (err) {
//         setError("Error fetching posts. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-6">Latest Blog Posts</h2>
//       {posts.length === 0 ? (
//         <p className="text-center text-gray-600">No posts found. <Link to="/create" className="text-blue-500 font-medium">Create a post</Link></p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {posts.map(post => (
//             <div key={post._id} className="p-5 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
//               <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
//               <p className="text-gray-600 mt-2">{post.content.substring(0, 120)}...</p>
//               <Link to={`/post/${post._id}`} className="text-blue-500 mt-3 inline-block font-medium">Read More →</Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;






// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:5001/api/posts", {
//           headers: { Authorization: Bearer ${token} },
//         });

//         setPosts(res.data);
//       } catch (err) {
//         setError("Error fetching posts. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-6">Latest Blog Posts here</h2>
//       <div className="max-h-[500px] overflow-y-auto p-2 border border-gray-300 rounded-lg"> 
//         {posts.length === 0 ? (
//           <p className="text-center text-gray-600">No posts found. <Link to="/create" className="text-blue-500 font-medium">Create a post</Link></p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {posts.map(post => (
//               <div key={post._id} className="p-5 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
//                 <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
//                 <p className="text-gray-600 mt-2">{post.content.substring(0, 120)}...</p>
//                 <Link to={/post/${post._id}} className="text-blue-500 mt-3 inline-block font-medium">Read More →</Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard; 





// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:5001/api/posts", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setPosts(res.data);
//       } catch (err) {
//         setError("Error fetching posts. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-6">Latest Blog Posts</h2>
//       <div className="max-h-[500px] overflow-y-auto p-2 border border-gray-300 rounded-lg">
//         {posts.length === 0 ? (
//           <p className="text-center text-gray-600">
//             No posts found. <Link to="/create" className="text-blue-500 font-medium">Create a post</Link>
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {posts.map((post) => (
//               <div key={post._id} className="p-5 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
//                 <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
//                 <p className="text-gray-600 mt-2">{post.content.substring(0, 120)}...</p>
//                 <p className="text-sm text-gray-500 mt-2">Created by: {post?.createdBy?.email || "Unknown"}</p>
//                 <Link to={`/post/${post._id}`} className="text-blue-500 mt-3 inline-block font-medium">Read More →</Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;







// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:5001/api/posts", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setPosts(res.data);
//       } catch (err) {
//         setError("Error fetching posts. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-6">Latest Blog Posts</h2>
//       <div className="max-h-[500px] overflow-y-auto p-2 border border-gray-300 rounded-lg">
//         {posts.length === 0 ? (
//           <p className="text-center text-gray-600">
//             No posts found. <Link to="/create" className="text-blue-500 font-medium">Create a post</Link>
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {posts.map((post) => (
//               <div key={post._id} className="p-5 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
//                 <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
//                 <p className="text-gray-600 mt-2">{post.content.substring(0, 120)}...</p>
//                 <Link to={`/post/${post._id}`} className="text-blue-500 mt-3 inline-block font-medium">Read More →</Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5001/api/posts", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setPosts(res.data);
      } catch (err) {
        setError("Error fetching posts. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Blog Posts here</h2>
      <div className="max-h-[500px] overflow-y-auto p-2 border border-gray-300 rounded-lg">
        {posts.length === 0 ? (
          <p className="text-center text-gray-600">
            No posts found. <Link to="/create" className="text-blue-500 font-medium">Create a post</Link>
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <div key={post._id} className="p-5 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.content.substring(0, 120)}...</p>
                <p className="text-sm text-gray-500 mt-2">
                  <strong>Author:</strong> {post.author} ({post.authorEmail})
                </p>
                <Link to={`/post/${post._id}`} className="text-blue-500 mt-3 inline-block font-medium">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;










