// Require necessary NPM packages
const mongoose = require("mongoose");

// Define appointment Schema
const AppointmentSchema = new mongoose.Schema(
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
const Appointment = mongoose.model("Appointment", AppointmentSchema);

// Export our Model for use
module.exports = Appointment;
