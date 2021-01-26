// Require necessary NPM packages
const mongoose = require("mongoose");

// Define Locations Schema
const LocationsSchema = new mongoose.Schema(
  {
    location: { type: String },
  },
  {
    timestamps: true,
  }
);

// Compile our Model based on the Schema
const Locations = mongoose.model("locations", LocationsSchema);

// Export our Model for use
module.exports = Locations;
