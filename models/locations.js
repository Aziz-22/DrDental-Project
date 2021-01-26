// Require necessary NPM packages
const mongoose = require("mongoose");

// Define Locations Schema
const LocationsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: String,
    author: { type: String, required: true },
    published: { type: Boolean, default: true },
    publishedOn: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

// Compile our Model based on the Schema
const Locations = mongoose.model("locations", LocationsSchema);

// Export our Model for use
module.exports = Locations;
