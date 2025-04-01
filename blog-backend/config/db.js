// const mongoose = require("mongoose");
// require("dotenv").config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.error("Database connection error:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


// const mongoose = require("mongoose");
// require("dotenv").config();

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             serverSelectionTimeoutMS: 5000, // ✅ Fix Timeout Error
//         });
//         console.log("✅ MongoDB Connected");
//     } catch (error) {
//         console.error("❌ MongoDB Connection Error:", error);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;







const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // Stop the server if MongoDB fails to connect
  }
};

module.exports = connectDB;
