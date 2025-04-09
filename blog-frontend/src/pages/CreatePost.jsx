
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * CreatePost component allows users to create a new post.
 * Uses Axios to send a POST request to the server.
 */

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState(""); // State for post title
  const [content, setContent] = useState("");  // State for post content


  /**
   * Handles the form submission to create a new post.
   * @param {Event} e - Form submission event.
   */

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");  // Retrieve authentication token
      await axios.post(
        "http://localhost:5001/api/posts",
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("🎉 Post created successfully!"); // Show success notification
      onPostCreated(); // Callback function after post creation
    } catch (error) {
      // Show error notification if request fails
      toast.error(error.response?.data?.message || "❌ Error creating post.");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create Post</h2>
      <form onSubmit={handleSubmit}>
         {/* Input field for post title */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border w-full mb-2"
          required
        />
         {/* Textarea for post content */}
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-2 border w-full mb-2"
          required
        ></textarea>
         {/* Submit button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;





