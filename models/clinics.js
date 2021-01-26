// Require necessary NPM packages
const mongoose = require("mongoose");

// Define Clinics Schema
const ClinicsSchema = new mongoose.Schema(
  {
    ClincName: { type: String, required: true },
    Lid: { type: Number },
    rating: { type: String },
    image: { type: String },
    section: { type: [String] },
  },
  {
    timestamps: true,
  }
);

// Compile our Model based on the Schema
const Clinics = mongoose.model("clinics", ClinicsSchema);

// Export our Model for use
module.exports = Clinics;
