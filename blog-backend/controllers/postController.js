const Post = require("../models/Post");
const User = require("../models/User");

/**
 * @desc Fetches all posts with user details
 * @route GET /api/posts
 * @access Public
 */

const getPosts = async (req, res) => {
  try {
    // Retrieve all posts and populate user details (first name, last name, email)
    const posts = await Post.find().populate("user", "firstName lastName email");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error: error.message });
  }
};

/**
 * @desc Creates a new post
 * @route POST /api/posts
 * @access Private (Requires authentication)
 */

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

     // Validate that title and content are provided
    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

     // Fetch the user details from the database
    const user = await User.findById(req.user.id).select("firstName lastName email");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

     // Create a new post object
    const newPost = new Post({
      title,
      content,
      user: user._id, // Store user ID as a reference
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
