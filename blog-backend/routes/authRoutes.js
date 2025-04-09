





const express = require("express");
const { signup, login } = require("../controllers/authController");

const router = express.Router();

/**
 * @desc User Signup
 * @route POST /api/auth/signup
 * @access Public
 */

router.post("/signup", signup);

/**
 * @desc User Login
 * @route POST /api/auth/login
 * @access Public
 */

router.post("/login", login);

module.exports = router;
