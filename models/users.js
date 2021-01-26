// Require necessary NPM packages
const mongoose = require("mongoose");
// Define users Schema
const UsersSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: Number },
  emial: { type: String, required: true },
  userImage: { type: String },
  isAdmin: { type: Boolean, required: true },
  password: { type: String, required: true },
});
// Compile our Model based on the Schema
const Users = mongoose.model("users", UsersSchema);
// Export our Model for use
module.exports = Users;
