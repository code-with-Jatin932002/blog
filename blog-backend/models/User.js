// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   googleId: { type: String },
//   facebookId: { type: String },
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   avatar: { type: String },
//   token: { type: String },
// });

// module.exports = mongoose.model("User", UserSchema);





const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String },
  password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);






