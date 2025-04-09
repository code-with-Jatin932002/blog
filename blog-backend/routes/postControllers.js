
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware"); // ✅ Protect routes
const Post = require("../models/Post"); // ✅ Import Post model
const User = require("../models/User"); // ✅ Import User model

const router = express.Router();

// ✅ Fetch All Posts (Public Route)
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "firstName lastName email");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error: error.message });
  }
});

// ✅ Create a New Post (Protected Route - Requires Login)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    // Fetch the user details
    const user = await User.findById(req.user.id).select("firstName lastName email");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newPost = new Post({
      title,
      content,
      user: user._id, // Store user reference
      author: `${user.firstName} ${user.lastName}`, // Store author name
      authorEmail: user.email, // Store author email
    });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully", post: newPost });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating post", error: error.message });
  }
});

module.exports = router;
