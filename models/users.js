// Require necessary NPM packages
const mongoose = require("mongoose");
// Define users Schema
const UsersSchema = new mongoose.Schema({
  Fname: { type: String, required: true },
  Lname: { type: String, required: true },
  phone: { type: Number },
  emial: { type: String, required: true },
  image: { type: String },
  isAdmin: { type: Boolean, required: true },
  password: { type: String, required: true },
});
// Compile our Model based on the Schema
const Users = mongoose.model("users", UsersSchema);
// Export our Model for use
module.exports = Users;
