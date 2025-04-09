




const express = require("express");
const { getPosts, createPost } = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @route GET /api/posts
 * @description Get all posts
 * @access Public
 */

router.get("/", getPosts);

/**
 * @route POST /api/posts
 * @description Create a new post
 * @access Private (Requires authentication)
 */
router.post("/", authMiddleware, createPost);

module.exports = router;






