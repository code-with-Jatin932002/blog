const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ✅ User Signup
const signup = async (req, res) => {
  try {
    // ✅ Extract user details from request body
    const { firstName, lastName, email, mobile, password } = req.body;

    // ✅ Check if the user already exists in the database
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

     // ✅ Hash the password before saving the user to the database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

     // ✅ Create a new user instance
    user = new User({ firstName, lastName, email, mobile, password: hashedPassword });
    // ✅ Save the user to the database
    await user.save();

     // ✅ Send success response
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    // ✅ Handle server errors
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ User Login
const login = async (req, res) => {
  try {
    // ✅ Extract login credentials from request body
    const { email, password } = req.body;

    // ✅ Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid Credentials" });

     // ✅ Compare entered password with hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

    // ✅ Generate a JWT token for authentication
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // ✅ Send response with token and user details (excluding sensitive data)
    res.json({ token, user: { id: user._id, firstName: user.firstName, email: user.email } });
  } catch (error) {
    // ✅ Handle server errors
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Export the controller functions
module.exports = { signup, login };
