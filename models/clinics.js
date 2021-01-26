// Require necessary NPM packages
const mongoose = require("mongoose");

// Define Clinics Schema
const ClinicsSchema = new mongoose.Schema(
  {
    clincName: { type: String, required: true },
    locationId: { type: mongoose.Schema.Types.ObjectId, ref: "locations" },
    rating: { type: String },
    clinicImage: { type: String },
    serviceType: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

// Compile our Model based on the Schema
const Clinics = mongoose.model("clinics", ClinicsSchema);

// Export our Model for use
module.exports = Clinics;
