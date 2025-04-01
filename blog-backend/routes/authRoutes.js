// const express = require("express");
// const passport = require("passport");
// const jwt = require("jsonwebtoken");
// require("../config/passport");

// const router = express.Router();

// router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
// router.get("/google/callback", passport.authenticate("google", { session: false }), (req, res) => {
//   const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
//   res.cookie("token", token).redirect("http://localhost:3000/dashboard");
// });

// router.get("/facebook", passport.authenticate("facebook"));
// router.get("/facebook/callback", passport.authenticate("facebook", { session: false }), (req, res) => {
//   const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
//   res.cookie("token", token).redirect("http://localhost:3000/dashboard");
// });

// module.exports = router;




// const express = require("express");
// const passport = require("passport");
// const jwt = require("jsonwebtoken");

// const router = express.Router();

// router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
// router.get("/google/callback", passport.authenticate("google", { session: false }), (req, res) => {
//   const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
//   res.cookie("token", token).redirect(process.env.FRONTEND_URL);
// });

// router.get("/facebook", passport.authenticate("facebook"));
// router.get("/facebook/callback", passport.authenticate("facebook", { session: false }), (req, res) => {
//   const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
//   res.cookie("token", token).redirect(process.env.FRONTEND_URL);
// });

// module.exports = router;






// const express = require("express");
// const passport = require("passport");
// const jwt = require("jsonwebtoken");

// const router = express.Router();

// // 🔹 Google Login
// router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// router.get("/google/callback", passport.authenticate("google", { session: false }), (req, res) => {
//     console.log("Google login success:", req.user);  // ✅ Debugging Log
//     if (!req.user) return res.status(401).json({ message: "Google authentication failed" });

//     const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
//     res.cookie("token", token).redirect(process.env.FRONTEND_URL);
// });

// // 🔹 Facebook Login
// router.get("/facebook", passport.authenticate("facebook"));

// router.get("/facebook/callback", passport.authenticate("facebook", { session: false }), (req, res) => {
//     console.log("Facebook login success:", req.user);  // ✅ Debugging Log
//     if (!req.user) return res.status(401).json({ message: "Facebook authentication failed" });

//     const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
//     res.cookie("token", token).redirect(process.env.FRONTEND_URL);
// });

// module.exports = router;



// const express = require("express");
// const passport = require("passport");
// const jwt = require("jsonwebtoken");

// const router = express.Router();

// // 🔹 Google Login
// router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// router.get("/google/callback", passport.authenticate("google", { session: false }), (req, res) => {
//     if (!req.user) return res.status(401).json({ message: "Google authentication failed" });

//     const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

//     res.cookie("token", token, { httpOnly: true, secure: false }); // ✅ Set token cookie
//     res.redirect(process.env.FRONTEND_URL + "/dashboard"); // ✅ Redirect to frontend
// });

// // 🔹 Facebook Login
// router.get("/facebook", passport.authenticate("facebook"));

// router.get("/facebook/callback", passport.authenticate("facebook", { session: false }), (req, res) => {
//     if (!req.user) return res.status(401).json({ message: "Facebook authentication failed" });

//     const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

//     res.cookie("token", token, { httpOnly: true, secure: false }); // ✅ Set token cookie
//     res.redirect(process.env.FRONTEND_URL + "/dashboard"); // ✅ Redirect to frontend
// });

// module.exports = router;







// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const router = express.Router();

// // ✅ User Signup
// router.post("/signup", async (req, res) => {
//   try {
//     const { firstName, lastName, email, mobile, password } = req.body;

//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ message: "User already exists" });

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user
//     user = new User({ firstName, lastName, email, mobile, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: "User registered successfully" });

//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // ✅ User Login
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid Credentials" });

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.json({ token, user: { id: user._id, firstName: user.firstName, email: user.email } });

//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// module.exports = router;










// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const router = express.Router();

// // ✅ User Signup Route
// router.post("/signup", async (req, res) => {
//   try {
//     const { firstName, lastName, email, mobile, password } = req.body;

//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ message: "User already exists" });

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user
//     user = new User({ firstName, lastName, email, mobile, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: "User registered successfully" });

//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// });

// // ✅ User Login Route
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid Credentials" });

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.json({ token, user: { id: user._id, firstName: user.firstName, email: user.email } });

//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// });

// module.exports = router;





const express = require("express");
const { signup, login } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
