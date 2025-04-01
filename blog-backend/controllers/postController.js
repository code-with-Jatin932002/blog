const Post = require("../models/Post");
const User = require("../models/User");

// ✅ Fetch All Posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "firstName lastName email");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error: error.message });
  }
};

// ✅ Create a New Post
const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const user = await User.findById(req.user.id).select("firstName lastName email");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newPost = new Post({
      title,
      content,
      user: user._id,
      author: `${user.firstName} ${user.lastName}`,
      authorEmail: user.email,
    });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error: error.message });
  }
};

module.exports = { getPosts, createPost };
