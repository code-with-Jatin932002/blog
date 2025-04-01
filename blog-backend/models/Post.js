// const mongoose = require("mongoose");

// const PostSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
// }, { timestamps: true });

// module.exports = mongoose.model("Post", PostSchema);





// const mongoose = require("mongoose");

// const PostSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Post", PostSchema);





// const mongoose = require("mongoose");

// const PostSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User model
//   author: { type: String, required: true }, // Store author's name
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Post", PostSchema);




const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  author: { type: String }, // Store author's full name
  authorEmail: { type: String }, // Store author's email
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", PostSchema);
