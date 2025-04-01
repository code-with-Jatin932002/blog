// const express = require("express");
// const Post = require("../models/Post");
// const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();

// router.get("/", async (req, res) => {
//   const posts = await Post.find().populate("user", "name");
//   res.json(posts);
// });

// router.post("/", authMiddleware, async (req, res) => {
//   const { title, content } = req.body;
//   const post = await Post.create({ title, content, user: req.user.id });
//   res.json(post);
// });

// module.exports = router;






// const express = require("express");
// const Post = require("../models/Post");
// const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();

// // 🔹 Fetch All Posts
// router.get("/", async (req, res) => {
//     try {
//         const posts = await Post.find();
//         res.json(posts);
//     } catch (error) {
//         res.status(500).json({ message: "Server error fetching posts" });
//     }
// });

// // 🔹 Create New Post (Protected Route)
// router.post("/", authMiddleware, async (req, res) => {
//     try {
//         const { title, content } = req.body;
//         const newPost = await Post.create({ title, content, user: req.user.id });

//         res.status(201).json(newPost);
//     } catch (error) {
//         res.status(500).json({ message: "Error creating post" });
//     }
// });

// module.exports = router;






// const express = require("express");
// const Post = require("../models/Post");
// const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();

// // 🔹 Fetch All Posts (No Authentication Needed)
// router.get("/", async (req, res) => {
//     try {
//         const posts = await Post.find().sort({ createdAt: -1 }); // ✅ Sort by latest posts
//         res.json(posts);
//     } catch (error) {
//         res.status(500).json({ message: "Server error fetching posts" });
//     }
// });

// // 🔹 Create New Post (Protected Route)
// router.post("/", authMiddleware, async (req, res) => {
//     try {
//         const { title, content } = req.body;
//         if (!title || !content) {
//             return res.status(400).json({ message: "Title and content are required" });
//         }

//         const newPost = await Post.create({ title, content, user: req.user.id });
//         res.status(201).json(newPost);
//     } catch (error) {
//         res.status(500).json({ message: "Error creating post" });
//     }
// });

// module.exports = router;




// const express = require("express");
// const Post = require("../models/Post");
// const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();

// // 🔹 Fetch All Posts
// router.get("/", async (req, res) => {
//   try {
//     const posts = await Post.find().sort({ createdAt: -1 });
//     res.json(posts);
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     res.status(500).json({ message: "Server error fetching posts" });
//   }
// });

// // 🔹 Create New Post (Protected Route)
// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     if (!title || !content) {
//       return res.status(400).json({ message: "Title and content are required" });
//     }

//     const newPost = new Post({ title, content, user: req.user.id });
//     await newPost.save();

//     console.log("✅ Post saved:", newPost); // ✅ Debugging log
//     res.status(201).json(newPost);
//   } catch (error) {
//     console.error("❌ Error creating post:", error);
//     res.status(500).json({ message: "Error creating post" });
//   }
// });

// module.exports = router;







// const express = require("express");
// const authMiddleware = require("../middleware/authMiddleware"); // Ensure auth is used
// const Post = require("../models/Post"); // Ensure Post model exists

// const router = express.Router();

// // ✅ Fetch All Posts (Protected)
// router.get("/", authMiddleware, async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.json(posts);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching posts", error: error.message });
//   }
// });

// module.exports = router;



// const express = require("express");
// const authMiddleware = require("../middleware/authMiddleware"); // Protect routes
// const Post = require("../models/Post"); // Import Post model

// const router = express.Router();

// // ✅ Fetch All Posts (Protected Route)
// router.get("/", authMiddleware, async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.json(posts);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching posts", error: error.message });
//   }
// });

// // ✅ Create a New Post (Protected Route)
// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     const newPost = new Post({ title, content, user: req.user.id });
//     await newPost.save();
//     res.status(201).json({ message: "Post created successfully", post: newPost });
//   } catch (error) {
//     res.status(500).json({ message: "Error creating post", error: error.message });
//   }
// });

// module.exports = router;









// const express = require("express");
// const authMiddleware = require("../middleware/authMiddleware"); // ✅ Protect routes
// const Post = require("../models/Post"); // ✅ Import Post model

// const router = express.Router();

// // ✅ Fetch All Posts (Public Route)
// router.get("/", async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.json(posts);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching posts", error: error.message });
//   }
// });

// // ✅ Create a New Post (Protected Route - Requires Login)
// router.post("/", authMiddleware, async (req, res) => {
  
//   try {
//     const { title, content } = req.body;

//     if (!title || !content) {
//       return res.status(400).json({ message: "Title and content are required" });
//     }

//     const newPost = new Post({
//       title,
//       content,
//       user: req.user.id, // Associate the post with the logged-in user
//     });

//     await newPost.save();
//     res.status(201).json({ message: "Post created successfully", post: newPost });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error creating post", error: error.message });
    
//   }
// });

// module.exports = router;







// const express = require("express");
// const authMiddleware = require("../middleware/authMiddleware"); // ✅ Protect routes
// const Post = require("../models/Post"); // ✅ Import Post model
// const User = require("../models/User"); // ✅ Import User model

// const router = express.Router();

// // ✅ Fetch All Posts (Public Route)
// router.get("/", async (req, res) => {
//   try {
//     const posts = await Post.find().populate("user", "firstName lastName email");
//     res.json(posts);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching posts", error: error.message });
//   }
// });

// // ✅ Create a New Post (Protected Route - Requires Login)
// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     const { title, content } = req.body;

//     if (!title || !content) {
//       return res.status(400).json({ message: "Title and content are required" });
//     }

//     // Find the logged-in user
//     const user = await User.findById(req.user.id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const newPost = new Post({
//       title,
//       content,
//       user: req.user.id, // Associate the post with the logged-in user
//       author: `${user.firstName} ${user.lastName}`, // Store author's full name
//     });

//     await newPost.save();
//     res.status(201).json({ message: "Post created successfully", post: newPost });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error creating post", error: error.message });
//   }
// });

// module.exports = router;









// const express = require("express");
// const authMiddleware = require("../middleware/authMiddleware"); // ✅ Protect routes
// const Post = require("../models/Post"); // ✅ Import Post model
// const User = require("../models/User"); // ✅ Import User model

// const router = express.Router();

// // ✅ Fetch All Posts (Public Route)
// router.get("/", async (req, res) => {
//   try {
//     const posts = await Post.find().populate("user", "firstName lastName email");
//     res.json(posts);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching posts", error: error.message });
//   }
// });

// // ✅ Create a New Post (Protected Route - Requires Login)
// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     const { title, content } = req.body;

//     if (!title || !content) {
//       return res.status(400).json({ message: "Title and content are required" });
//     }

//     // Fetch the user details
//     const user = await User.findById(req.user.id).select("firstName lastName email");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const newPost = new Post({
//       title,
//       content,
//       user: user._id, // Store user reference
//       author: `${user.firstName} ${user.lastName}`, // Store author name
//       authorEmail: user.email, // Store author email
//     });

//     await newPost.save();
//     res.status(201).json({ message: "Post created successfully", post: newPost });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error creating post", error: error.message });
//   }
// });

// module.exports = router;




const express = require("express");
const { getPosts, createPost } = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getPosts);
router.post("/", authMiddleware, createPost);

module.exports = router;






