// const express = require("express");
// const mongoose = require("./config/db");
// const cors = require("cors");
// const passport = require("passport");
// require("dotenv").config();
// require("./config/passport");

// const authRoutes = require("./routes/authRoutes");
// const postRoutes = require("./routes/postRoutes");

// const app = express();

// // Middleware
// app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
// app.use(express.json());
// app.use(passport.initialize());

// // Routes
// app.use("/auth", authRoutes);
// app.use("/api/posts", postRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));






// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db");

// const authRoutes = require("./routes/authRoutes");

// dotenv.config();
// connectDB();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes"); // ✅ Add post routes

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes); // ✅ Add this line to enable fetching posts

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));






