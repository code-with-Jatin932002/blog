const request = require("supertest");
const app = require("../server"); // Server import
const mongoose = require("mongoose");
const User = require("../models/User");

beforeAll(async () => {
//   await User.deleteMany(); // Clear user collection before tests
});

describe("Authentication API Tests", () => {
  let token; // To store the authentication token

  /**
   * ✅ Test: User Registration (Sign Up)
   * - Sends a request to create a new user.
   * - Expects a 201 status and success message.
   */
  test("✅ User can sign up successfully", async () => {
    const res = await request(app).post("/api/auth/signup").send({
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      mobile: "1234567890",
      password: "Password123",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User registered successfully");
  });

  /**
   * ❌ Test: Duplicate User Signup
   * - Attempts to sign up with an existing email.
   * - Expects a 400 status and an error message.
   */
  test("❌ Duplicate Email should return error", async () => {
    const res = await request(app).post("/api/auth/signup").send({
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      mobile: "1234567890",
      password: "Password123",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("User already exists");
  });

    /**
   * ✅ Test: User Login
   * - Logs in an existing user.
   * - Expects a 200 status and a valid token in response.
   */
  test("✅ User can log in successfully and receive token", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "john@example.com",
      password: "Password123",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token"); // Token should be in response
    token = res.body.token; // Save token for later use
  });

    /**
   * ❌ Test: Login with Wrong Password
   * - Attempts to log in with an incorrect password.
   * - Expects a 400 status and an "Invalid Credentials" message.
   */
  test("❌ Login with incorrect password should fail", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "john@example.com",
      password: "WrongPassword",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Invalid Credentials");
  });
});

/**
 * 🛑 Clean up: Close database connection after all tests
 */
afterAll(async () => {
  await mongoose.connection.close(); // Close database connection after tests
});
