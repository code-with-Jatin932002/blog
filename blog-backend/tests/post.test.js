const request = require("supertest");
const app = require("../server"); // Import server
const mongoose = require("mongoose");
const Post = require("../models/Post");
const User = require("../models/User");

let token;
let userId;

beforeAll(async () => {
  // await Post.deleteMany(); // Clear posts before tests
  // await User.deleteMany(); // Clear users before tests

  // Create a user to get authentication token
  const userRes = await request(app).post("/api/auth/signup").send({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@example.com",
    mobile: "9876543210",
    password: "Password123",
  });

  // Log in the test user to get an authentication token
  const loginRes = await request(app).post("/api/auth/login").send({
    email: "jane@example.com",
    password: "Password123",
  });

  token = loginRes.body.token;  // Store token for authenticated requests
  userId = loginRes.body.user.id;
});

describe("Post API Tests", () => {
  /**
   * Test: Fetching posts when there are none should return an empty array.
   */
  test("✅ Should fetch empty posts initially", async () => {
    const res = await request(app).get("/api/posts");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]); // Expect an empty array
  });

   /**
   * Test: Creating a post with authentication should succeed.
   */
  test("✅ Should create a post when authenticated", async () => {
    const res = await request(app)
      .post("/api/posts")
      .set("Authorization", `Bearer ${token}`)// Set auth token
      .send({
        title: "First Post",
        content: "This is my first post!",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("Post created successfully");
    expect(res.body.post).toHaveProperty("title", "First Post");
  });

  /**
   * Test: Creating a post without authentication should fail.
   */
  test("❌ Should not create post without authentication", async () => {
    const res = await request(app).post("/api/posts").send({
      title: "Unauthorized Post",
      content: "This post should not be created.",
    });

    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe("Access Denied. No token provided.");
  });

    /**
   * Test: Creating a post with missing fields should fail.
   */
  test("❌ Should not create post with missing fields", async () => {
    const res = await request(app)
      .post("/api/posts")
      .set("Authorization", `Bearer ${token}`)
      .send({ title: "" });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Title and content are required");
  });

   /**
   * Test: Fetching posts should return at least one post after creation.
   */
  test("✅ Should fetch all posts", async () => {
    const res = await request(app).get("/api/posts");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0); // At least one post should exis
  });
});

afterAll(async () => {
  await mongoose.connection.close(); // Close database connection after tests
});







