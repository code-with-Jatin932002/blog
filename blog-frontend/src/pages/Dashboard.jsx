
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
   // State to store fetched posts
  const [posts, setPosts] = useState([]);
   // State to track loading status
  const [loading, setLoading] = useState(true);
   // State to track error messages
  const [error, setError] = useState("");

  useEffect(() => {
      /**
     * Fetches blog posts from the backend API.
     * Uses an authentication token stored in localStorage.
     * Updates state with the fetched posts or an error message.
     */
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");

        // Making a GET request to fetch posts
        const res = await axios.get("http://localhost:5001/api/posts", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setPosts(res.data);
      } catch (err) {
        setError("Error fetching posts. Please try again.");
      } finally {
        setLoading(false); // Stop loading once request completes
      }
    };

    fetchPosts();
  }, []); // Runs only once when the component mounts

  // Display loading state
  if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
  // Display error message if API request fails
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Blog Posts here</h2>
        {/* Blog posts container with scrolling enabled for long lists */}
      <div className="max-h-[500px] overflow-y-auto p-2 border border-gray-300 rounded-lg">
        {posts.length === 0 ? (
           // Message displayed when no posts are available
          <p className="text-center text-gray-600">
            No posts found. <Link to="/create" className="text-blue-500 font-medium">Create a post</Link>
          </p>
        ) : (
          // Display posts in a responsive grid layout
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <div key={post._id} className="p-5 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.content.substring(0, 120)}...</p> {/* Show preview of content */}
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










